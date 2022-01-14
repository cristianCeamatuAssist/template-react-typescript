import styled from 'styled-components'
import cx from 'classnames'
import {
  BsFillSkipBackwardFill,
  BsFillCaretLeftFill,
  BsFillSkipForwardFill,
  BsFillCaretRightFill,
} from 'react-icons/bs'
// components
import { IPagination, Divider } from 'components'

interface IProps {
  pagination: IPagination
  hasResults: boolean
}

export const TablePagination = ({ pagination, hasResults }: IProps) => {
  const changePage = (page: string | number) => {
    pagination?.changePageHandler(page)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    pagination.changeItemsPerPageHandler(e.target.value)
  }

  // variables
  const totalPages = hasResults ? Math.ceil(pagination.totalItems / pagination.itemsPerPage) : 0

  return (
    <StyledDiv>
      <Divider />

      <div className="pagination">
        <div className="show-text">Items per page</div>
        <select onChange={handleChange} value={pagination?.itemsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
        <BsFillSkipBackwardFill
          className={cx({ disabled: !hasResults })}
          onClick={() => pagination.page !== 1 && changePage(1)}
        />
        <BsFillCaretRightFill
          className={cx({ disabled: !hasResults })}
          onClick={() => pagination.page - 1 > 0 && changePage(pagination.page - 1)}
        />
        <div className="page-number">
          Page <span>{pagination.page}</span> of <span>{totalPages}</span>
        </div>
        <BsFillCaretLeftFill
          className={cx({ disabled: !hasResults })}
          onClick={() => pagination.page + 1 <= totalPages && changePage(pagination.page + 1)}
        />
        <BsFillSkipForwardFill
          className={cx({ disabled: !hasResults })}
          onClick={() => pagination.page !== totalPages && changePage(totalPages)}
        />
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: sticky;
  bottom: 0;
  inset-inline: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 3;

  .pagination {
    padding-block: 0.5em 1em;
    padding-right: 1em;
    display: flex;
    justify-content: right;
    align-items: center;
    color: #395264;
    font-size: 14px;

    svg {
      cursor: pointer;
      width: 10px;
      height: 10px;
      margin: 0 5px;

      .disabled {
        pointer-events: none;
      }
    }

    svg:hover:not(.disabled) {
      path {
        stroke: red;
      }
    }

    .show-text {
      line-height: 16px;
      margin-right: 10px;
      font-size: 12px;
    }

    .page-number {
      line-height: 16px;
      margin: 0 10px;

      span {
        font-weight: 600;
      }
    }
  }
`
