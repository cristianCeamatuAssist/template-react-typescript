import styled from 'styled-components'
import { NavLink as NavLinkBase, LinkProps } from 'react-router-dom'

const NavLink = ({ children, to, ...props }: LinkProps) => {
  return (
    <Wrapper>
      <NavLinkBase to={to} {...props}>
        {children}
      </NavLinkBase>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 1rem;
`

export { NavLink }
