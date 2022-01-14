import { useState } from 'react'
import styled from 'styled-components'
// components
import {
  TableHead,
  TableBody,
  TablePagination,
  IColumn,
  IPagination,
  ISelectableRows,
  INoDataState,
  ISort,
} from 'components'

interface IProps {
  isLoading: boolean
  error: null | string
  rows?: any[] | null
  columns: IColumn[]
  sort?: ISort
  pagination?: IPagination
  noDataState?: INoDataState
  selectableRows?: ISelectableRows
  hiddenColumns?: string[]
}

export const Table = ({
  isLoading,
  error,
  rows,
  columns,
  sort,
  pagination,
  hiddenColumns,
  noDataState,
  selectableRows,
}: IProps) => {
  // local state
  const [sorting, setSorting] = useState(sort?.current || '')
  const allRowsDeselected = {} as { [key: string]: boolean }
  const allRowsSelected = {} as { [key: string]: boolean }
  rows?.forEach((row) => (allRowsDeselected[row.id] = false))
  rows?.forEach((row) => (allRowsSelected[row.id] = true))
  if (selectableRows) selectableRows.setSelectedRows(allRowsDeselected)

  // handlers
  const sortingBy = (type: string) => {
    setSorting(type === sorting ? '' : type)
    sort?.sortByHandler(type === sorting ? '' : type)
  }

  return (
    <StyledDiv>
      <table>
        <TableHead
          columns={columns}
          hiddenColumns={hiddenColumns}
          rows={rows}
          sortingBy={sort && sortingBy}
          sorting={sorting}
          selectableRows={selectableRows && { allRowsSelected, allRowsDeselected, ...selectableRows }}
        />
        <TableBody
          columns={columns}
          hiddenColumns={hiddenColumns}
          rows={rows}
          isLoading={isLoading}
          error={error}
          noDataState={noDataState}
          selectableRows={selectableRows}
        />
      </table>

      {pagination && !isLoading && !!rows?.length && (
        <TablePagination pagination={pagination} hasResults={!!rows?.length} />
      )}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  white-space: nowrap;
  width: 100%;
  height: 100%;
  overflow: auto;

  table {
    border-spacing: 0;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    border: none;

    tbody tr,
    thead tr {
      line-height: 25px;
      min-height: 25px;
    }

    tbody td,
    thead th {
      text-overflow: ellipsis;
      vertical-align: middle;
      padding-inline: 1em;
      padding: 0.75rem;

      &:first-child {
        padding-left: 1.25rem;
      }
    }
  }

  .action-icon {
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: all 0.2s ease;
    }
  }

  .action-icon:hover {
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.error};
      }
    }
  }
`
