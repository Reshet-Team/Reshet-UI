'use no memo' // TanStack Table doesn't support the React Compiler yet

import { Input } from '@/components/Input/Input'
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type TableOptions,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import clsx from 'clsx'
import { useMemo, useRef, type ReactNode } from 'react'
import styles from './DataTable.module.scss'
import { DataTableContext, useDataTableContext, type DataTableContextValue } from './DataTableContext'
import { expandColumnDef } from './expandColumnDef'
import TablePrimitive from './TablePrimitive'
import type { RenderDetailPanel } from './types'
import { useColumnSizeVars } from './useColumnSizeVars'

interface DataTableRootProps<TData, TValue> extends Omit<
  TableOptions<TData>,
  'columns' | 'getCoreRowModel'
> {
  columns: (ColumnDef<TData, TValue> | undefined)[]
  data: TData[]
  isLoading?: boolean
  enableVirtualization?: boolean
  renderDetailPanel?: RenderDetailPanel<TData>
  className?: string
  loadingRowsCount?: number
  children?: ReactNode
}

function DataTableRoot<TData, TValue>({
  columns: providedColumns,
  isLoading,
  data,
  enableVirtualization,
  renderDetailPanel,
  className,
  loadingRowsCount = 5,
  children,
  ...options
}: DataTableRootProps<TData, TValue>) {
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const columns = useMemo<ColumnDef<TData, TValue>[]>(
    () =>
      [
        renderDetailPanel
          ? (expandColumnDef as ColumnDef<TData, TValue>)
          : undefined,
        ...providedColumns,
      ].filter(
        (column): column is ColumnDef<TData, TValue> => column !== undefined,
      ),
    [providedColumns, renderDetailPanel],
  )

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: renderDetailPanel ? () => true : undefined,
    ...options,
  })

  const rowCount = table.getRowModel().rows.length
  const { expanded } = table.getState()

  const rowVirtualizer = useVirtualizer({
    count: enableVirtualization
      ? isLoading
        ? loadingRowsCount
        : renderDetailPanel
          ? rowCount * 2
          : rowCount
      : 0,
    estimateSize: (index) =>
      renderDetailPanel && index % 2 === 1 ? (expanded ? 100 : 0) : 64,
    getScrollElement: () =>
      enableVirtualization ? tableContainerRef.current : null,
    measureElement:
      navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    gap: renderDetailPanel ? 5 : 10,
    overscan: 5,
    enabled: enableVirtualization,
  })

  const columnSizeVars = useColumnSizeVars(table)

  const contextValue: DataTableContextValue<TData> = {
    table,
    rowVirtualizer,
    tableContainerRef,
    enableVirtualization,
    renderDetailPanel,
    columnSizeVars,
    isLoading,
    loadingRowsCount,
  }

  return (
    <DataTableContext value={contextValue as DataTableContextValue}>
      <div className={clsx(styles.DataTableWrapper, className)}>{children}</div>
    </DataTableContext>
  )
}

interface DataTableContentProps {
  children?: ReactNode
}

function DataTableContent({ children }: DataTableContentProps) {
  const {
    tableContainerRef,
    columnSizeVars,
    enableVirtualization,
    renderDetailPanel,
  } = useDataTableContext()

  return (
    <div className={styles.DataTableContainer} ref={tableContainerRef}>
      <TablePrimitive.Table
        className={styles.Table}
        data-expandable={renderDetailPanel !== undefined}
        data-virtualized={enableVirtualization}
        style={{ ...columnSizeVars }}
      >
        {children}
      </TablePrimitive.Table>
    </div>
  )
}

interface DataTableSearchProps {
  placeholder?: string
  className?: string
}

function DataTableSearch({ placeholder, className }: DataTableSearchProps) {
  const { table } = useDataTableContext()
  const { globalFilter } = table.getState()

  return (
    <Input
      className={clsx(styles.SearchInput, className)}
      placeholder={placeholder}
      value={globalFilter}
      onInput={(event) =>
        table.setGlobalFilter(event.currentTarget.value || undefined)
      }
    />
  )
}

export { DataTableContent, DataTableRoot, DataTableSearch }
