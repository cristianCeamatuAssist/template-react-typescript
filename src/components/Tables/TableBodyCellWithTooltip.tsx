import styled from 'styled-components'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

interface IProps {
  text: string
  tooltipText: string
  onClick: (event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => void
}

export const TableBodyCellWithTooltip = ({ text, tooltipText, onClick }: IProps) => {
  return (
    <StyledTd onClick={onClick}>
      <OverlayTrigger placement="top" overlay={<Tooltip id={`table-cell-tooltip-top`}>{tooltipText}</Tooltip>}>
        <span>{text}</span>
      </OverlayTrigger>
    </StyledTd>
  )
}

const StyledTd = styled.td`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'normal')};
`
