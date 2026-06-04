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
import { useMemo, useRef, type RefObject } from 'react'
import styles from './DataTable.module.scss'
import { DataTableBody } from './DataTableBody'
import { DataTableHeader } from './DataTableHeader'
import { expandColumnDef } from './expandColumnDef'
import { selectColumn } from './selectColumnDef'
import TablePrimitive from './TablePrimitive'
import type { RenderDetailPanel } from './types'
import { useColumnSizeVars } from './useColumnSizeVars'

interface DataTableProps<TData, TValue> extends Omit<
  TableOptions<TData>,
  'columns' | 'getCoreRowModel'
> {
  columns: (ColumnDef<TData, TValue> | undefined)[]
  data: TData[]
  isLoading?: boolean
  enableRowSelectionColumn?: boolean
  enableGlobalSearch?: boolean
  globalSearchPlaceholder?: string
  enableVirtualization?: boolean
  renderDetailPanel?: RenderDetailPanel<TData>
  rowsRef?: RefObject<Record<string, HTMLTableRowElement | null>>
  lastRowRef?: RefObject<HTMLTableRowElement | null>
  className?: string
  loadingRowsCount?: number
}

export function DataTable<TData, TValue>({
  columns: providedColumns,
  isLoading,
  data,
  rowsRef,
  enableRowSelectionColumn,
  enableGlobalSearch,
  globalSearchPlaceholder,
  enableVirtualization,
  renderDetailPanel,
  className,
  loadingRowsCount = 5,
  lastRowRef,
  ...options
}: DataTableProps<TData, TValue>) {
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const columns = useMemo<ColumnDef<TData, TValue>[]>(
    () =>
      [
        renderDetailPanel
          ? (expandColumnDef as ColumnDef<TData, TValue>)
          : undefined,
        enableRowSelectionColumn
          ? (selectColumn as ColumnDef<TData, TValue>)
          : undefined,
        ...providedColumns,
      ].filter(
        (column): column is ColumnDef<TData, TValue> => column !== undefined,
      ),
    [providedColumns, enableRowSelectionColumn, renderDetailPanel],
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
  const { expanded, globalFilter } = table.getState()

  // Set up this way to avoid extra rerenders when not virtualized
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

  return (
    <div className={clsx(styles.DataTableWrapper, className)}>
      {enableGlobalSearch && (
        <Input
          className={styles.SearchInput}
          placeholder={globalSearchPlaceholder}
          value={globalFilter}
          onInput={(event) =>
            table.setGlobalFilter(event.currentTarget.value || undefined)
          }
        />
      )}

      <div className={styles.DataTableContainer} ref={tableContainerRef}>
        <TablePrimitive.Table
          className={styles.Table}
          data-expandable={renderDetailPanel !== undefined}
          data-virtualized={enableVirtualization}
          style={{ ...columnSizeVars }}
        >
          <DataTableHeader
            table={table}
            enableVirtualization={enableVirtualization}
          />
          <DataTableBody
            table={table}
            numberOfColumns={columns.length}
            isLoading={isLoading}
            renderDetailPanel={renderDetailPanel}
            enableVirtualization={enableVirtualization}
            rowVirtualizer={rowVirtualizer}
            loadingRowsCount={loadingRowsCount}
            rowsRef={rowsRef}
            lastRowRef={lastRowRef}
          />
        </TablePrimitive.Table>
      </div>
    </div>
  )
}
