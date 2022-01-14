import styled from 'styled-components'

interface IProps {
  icon?: JSX.Element
  text: string
}

export const TableBodyCellSticky = ({ icon, text }: IProps) => {
  return (
    <StyledTd className="sticky">
      <div className="icon">{icon}</div>
      {text || ''}
    </StyledTd>
  )
}

const StyledTd = styled.td`
  display: flex;
  align-items: stretch;
  font-weight: 600;
  gap: 0.5em;
  z-index: 2;
  position: sticky;
  left: 0;
  z-index: 1;
`
