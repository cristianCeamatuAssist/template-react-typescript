import { isEmpty } from 'lodash'
import styled from 'styled-components'
// components
import { IColumn, IRow, ISelectableRows, TableHeadCell } from 'components'

interface IProps {
  columns: IColumn[]
  hiddenColumns?: string[]
  rows?: IRow[] | null
  sortingBy?: (type: string) => void
  sorting: string
  selectableRows?: {
    allRowsSelected: { [key: string]: boolean }
    allRowsDeselected: { [key: string]: boolean }
  } & ISelectableRows
}

export const TableHead = ({ sortingBy, columns, sorting, rows, hiddenColumns, selectableRows }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    selectableRows?.setSelectedRows(checked ? selectableRows?.allRowsSelected : selectableRows?.allRowsDeselected)
  }

  return (
    <StyledThead>
      <tr>
        {selectableRows && !!rows?.length && (
          <th>
            <label>
              <input
                name="toggle-select-all"
                type="checkbox"
                checked={
                  !isEmpty(selectableRows.selectedRows) &&
                  Object.keys(selectableRows.selectedRows).every((rowId) => selectableRows.selectedRows[rowId])
                }
                onChange={handleChange}
              />
              <div className="sf-custom-checkbox-input mx-auto"></div>
            </label>
          </th>
        )}

        {columns?.map(
          (column) =>
            !hiddenColumns?.includes(column.prop) && (
              <TableHeadCell key={column.prop} column={column} sortingBy={sortingBy} sorting={sorting} />
            ),
        )}
      </tr>
    </StyledThead>
  )
}

const StyledThead = styled.thead`
  text-transform: capitalize;
  font-size: 13px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.grey.light};
  letter-spacing: 0.4px;
  position: relative;

  > tr {
    > th {
      position: sticky;
      top: 0;
      text-align: left;
      background-color: ${({ theme }) => theme.colors.white};

      &:first-child {
        z-index: 2;
        left: 2px;
      }

      &.action-cell {
        > div {
          justify-content: center;
        }
      }
    }
  }
`
