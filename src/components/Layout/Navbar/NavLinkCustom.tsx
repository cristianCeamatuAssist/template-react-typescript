import styled from 'styled-components'
// types
import { IChildrenNode } from 'types'

interface IProps extends IChildrenNode {
  onClick: () => void
}

export const NavLinkCustom = ({ children, onClick }: IProps) => {
  return <StyledDiv onClick={onClick}>{children}</StyledDiv>
}

const StyledDiv = styled.div`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
`
