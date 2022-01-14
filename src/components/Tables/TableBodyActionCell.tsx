import styled from 'styled-components'
// types and utils
import { IChildrenNode } from 'types'

export const TableBodyActionCell = ({ children }: IChildrenNode) => {
  return <StyledTd>{children}</StyledTd>
}

const StyledTd = styled.td`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.325em;
`
