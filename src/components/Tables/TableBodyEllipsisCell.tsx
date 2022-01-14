import styled from 'styled-components'

interface IProps {
  text: string
}

export const TableBodyEllipsisCell = ({ text }: IProps) => {
  return <StyledTd>{text}</StyledTd>
}

const StyledTd = styled.td`
  text-overflow: ellipsis;
  max-width: 15ch;
  overflow: hidden;
`
