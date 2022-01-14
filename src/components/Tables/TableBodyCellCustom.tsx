import styled from 'styled-components'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
  onClick: () => void
}

export const TableBodyCellCustom = ({ children, onClick }: IProps) => {
  return <StyledTd onClick={onClick}>{children}</StyledTd>
}

const StyledTd = styled.td`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'normal')};
`
