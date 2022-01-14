import styled from 'styled-components'

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void
  component: JSX.Element
}

export const TableBodyCell = ({ onClick, component }: IProps) => {
  return <StyledTd onClick={onClick}>{component}</StyledTd>
}

const StyledTd = styled.td`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'normal')};
`
