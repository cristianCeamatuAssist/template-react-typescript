import styled from 'styled-components'
import cx from 'classnames'
import { ReactComponent as PolygonDownIcon } from 'assets/images/table/PolygonDownIcon.svg'
import { ReactComponent as PolygonUpIcon } from 'assets/images/table/PolygonUpIcon.svg'
import { IColumn } from 'components'

interface IProps {
  column: IColumn
  sortingBy?: (type: string) => void
  sorting: string
}
export const TableHeadCell = ({ column, sortingBy, sorting }: IProps) => {
  const { label, name, extraProps } = column

  return (
    <StyledTh {...extraProps} title={label} scope="row">
      <div>
        {label}
        {!column?.hideSortBy && sortingBy && (
          <div className="sorting">
            <PolygonUpIcon className={cx({ active: column.name === sorting })} onClick={() => sortingBy(name)} />
            <PolygonDownIcon
              className={cx({ active: `-${column.name}` === sorting })}
              onClick={() => sortingBy(`-${name}`)}
            />
          </div>
        )}
      </div>
    </StyledTh>
  )
}

const StyledTh = styled.th`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
  }

  .sorting {
    display: flex;
    flex-direction: column;
    gap: 0.1em;

    svg {
      width: 0.75em;
      height: 0.75em;

      :hover {
        transform: scale(1.3);
        cursor: pointer;
      }

      &.active {
        transform: scale(1.3);

        path {
          fill: ${({ theme }) => theme.colors.warning};
        }
      }
    }
  }
`
