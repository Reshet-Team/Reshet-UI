'use no memo'

import { Empty as EmptyRoot, EmptyTitle } from '@/components/Empty/Empty'
import { type Table } from '@tanstack/react-table'
import styles from './Empty.module.scss'
import TablePrimitive from './TablePrimitive'

export interface EmptyProps<TData> {
  table: Table<TData>
  numberOfColumns: number
  message?: string
}

export function Empty<TData>({
  table,
  numberOfColumns,
  message,
}: EmptyProps<TData>) {
  return (
    <TablePrimitive.TableRow>
      <TablePrimitive.TableCell
        colSpan={table.getHeaderGroups()[0]?.headers.length ?? numberOfColumns}
        className={styles.NoResultsCell}
      >
        <EmptyRoot>
          <EmptyTitle>{message ?? 'No data to display'}</EmptyTitle>
        </EmptyRoot>
      </TablePrimitive.TableCell>
    </TablePrimitive.TableRow>
  )
}
