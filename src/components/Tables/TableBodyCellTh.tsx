import styled from 'styled-components'
// styles and assets
import { ReactComponent as EllipseIcon } from 'assets/images/table/Ellipse.svg'

interface IProps {
  iconSrc: string
  text: string
  pendingAction: boolean
}

export const TableBodyCellTh = ({ iconSrc, text, pendingAction }: IProps) => {
  return (
    <StyledTh>
      <div className="icon">
        {pendingAction && <EllipseIcon />}
        {iconSrc && <img src={iconSrc} alt="User Icon" className="user-icon" />}
      </div>
      {text || ''}
    </StyledTh>
  )
}

const StyledTh = styled.th`
  display: flex;
  align-items: center;

  .icon {
    position: relative;

    svg {
      position: absolute;
      right: 0.7em;
      width: 0.5em;
      height: 0.5em;

      circle {
        fill: ${({ theme }) => theme.colors.error};
      }
    }
  }
`
