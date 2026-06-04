'use no memo'

import { type Table } from '@tanstack/react-table'
import type { Virtualizer } from '@tanstack/react-virtual'
import { RefObject } from 'react'
import styles from './DataTableBody.module.scss'
import { DataTableRow } from './DataTableRow'
import { Empty } from './Empty'
import { LoadingRow } from './LoadingRow'
import TablePrimitive from './TablePrimitive'
import type { RenderDetailPanel } from './types'

export interface DataTableBodyProps<TData> {
  table: Table<TData>
  numberOfColumns: number
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>
  isLoading?: boolean
  enableVirtualization?: boolean
  renderDetailPanel?: RenderDetailPanel<TData>
  loadingRowsCount: number
  rowsRef?: RefObject<Record<string, HTMLTableRowElement | null>>
  lastRowRef?: RefObject<HTMLTableRowElement | null>
}

export function DataTableBody<TData>({
  table,
  numberOfColumns,
  rowsRef,
  isLoading,
  enableVirtualization,
  rowVirtualizer,
  renderDetailPanel,
  loadingRowsCount,
  lastRowRef,
}: DataTableBodyProps<TData>) {
  const { rows } = table.getRowModel()
  const virtualItems = rowVirtualizer.getVirtualItems()

  return (
    <TablePrimitive.TableBody
      className={styles.TableBody}
      data-virtualized={enableVirtualization}
      style={{
        height: enableVirtualization
          ? `${rowVirtualizer.getTotalSize()}px`
          : undefined,
      }}
    >
      {isLoading ? (
        Array.from({ length: loadingRowsCount }).map((_, index) => (
          <LoadingRow
            key={`skeleton-${index}`}
            table={table}
            index={index}
            enableVirtualization={enableVirtualization}
            rowVirtualizer={rowVirtualizer}
          />
        ))
      ) : rows.length ? (
        enableVirtualization ? (
          virtualItems.map((virtualRow) => {
            if (renderDetailPanel && virtualRow.index % 2 === 1) {
              return null
            }

            const staticIndex = renderDetailPanel
              ? virtualRow.index / 2
              : virtualRow.index
            const rowData = rows[staticIndex]

            if (!rowData) {
              return null
            }

            return (
              <DataTableRow
                key={virtualRow.key}
                table={table}
                rowsRef={rowsRef}
                row={rowData}
                renderDetailPanel={renderDetailPanel}
                enableVirtualization
                rowVirtualizer={rowVirtualizer}
                virtualRow={virtualRow}
                ref={
                  virtualRow.index === virtualItems.length - 1
                    ? lastRowRef
                    : undefined
                }
              />
            )
          })
        ) : (
          rows.map((row, index) => (
            <DataTableRow
              key={row.id}
              table={table}
              rowsRef={rowsRef}
              row={row}
              renderDetailPanel={renderDetailPanel}
              ref={index === rows.length - 1 ? lastRowRef : undefined}
            />
          ))
        )
      ) : (
        <Empty
          table={table}
          numberOfColumns={numberOfColumns}
          data-virtualized={enableVirtualization}
        />
      )}
    </TablePrimitive.TableBody>
  )
}
