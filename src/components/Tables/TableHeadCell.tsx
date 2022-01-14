import styled from 'styled-components'
import cx from 'classnames'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'
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
            <BsCaretUpFill className={cx({ active: column.name === sorting })} onClick={() => sortingBy(name)} />
            <BsCaretDownFill
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
