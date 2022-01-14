import React from 'react'
import styled from 'styled-components'
import {
  IColumn,
  IRow,
  TableBodyNoData,
  LoadingAnimation,
  ISelectableRows,
  INoDataState,
  LoadingBox,
  NoContentBox,
} from 'components'

interface IProps {
  isLoading: boolean
  error: null | string
  rows: IRow[] | null
  columns: IColumn[]
  selectableRows?: ISelectableRows
  noDataState?: INoDataState
  hiddenColumns?: string[]
}
export const TableBody = ({ isLoading, error, rows, columns, hiddenColumns, noDataState, selectableRows }: IProps) => {
  const toggleSelectRowHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target
    selectableRows?.setSelectedRows({ ...selectableRows.selectedRows, [name]: checked ? true : false })
  }

  return (
    <StyledTbody>
      <tr className="bg-white content-states-wrapper">
        {isLoading && (
          <td colSpan={columns?.length}>
            <LoadingBox message="Fetching resources..." />
          </td>
        )}

        {error && !isLoading && (
          <td colSpan={columns?.length}>
            {' '}
            <TableBodyNoData
              iconComponent={<LoadingAnimation />}
              title={error}
              columnsCount={selectableRows ? columns.length + 1 : columns.length}
            />
          </td>
        )}

        {!isLoading && !error && !rows?.length && (
          <td colSpan={columns?.length}>
            <NoContentBox message={noDataState?.title || 'No resources found'} />
          </td>
        )}
      </tr>

      {!isLoading &&
        !error &&
        rows?.map((row, index) => (
          <tr key={index}>
            {selectableRows && rows?.length && (
              <th>
                <label className="sf-thin-text sf-checkboxes-input d-block m-0">
                  <input
                    name={row.id}
                    type="checkbox"
                    checked={selectableRows.selectedRows[row.id]}
                    onChange={toggleSelectRowHandler}
                  />
                  <div className="sf-custom-checkbox-input mx-auto"></div>
                </label>
              </th>
            )}

            {columns?.map((column, index) => {
              const isVisibleColumn = !hiddenColumns?.includes(column.name)
              if (isVisibleColumn) {
                return React.isValidElement(row[column.name]) ? (
                  <React.Fragment key={`column-${index}`}>{row[column.name]}</React.Fragment>
                ) : (
                  <td key={`column-${index}`}>{column.format ? column.format(row[column.name]) : row[column.name]}</td>
                )
              }
              return null
            })}
          </tr>
        ))}
    </StyledTbody>
  )
}

const StyledTbody = styled.tbody`
  tr {
    td.sticky {
      background-color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey.lighter};

      & td.sticky {
        background-color: ${({ theme }) => theme.colors.grey.lighter};
        z-index: 2;
      }
    }
  }
`
