import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SiDatadog } from 'react-icons/si'
// components
import { NavLinkCustom } from 'components'
import { NavLink } from 'components'
// paths
import { PathsEnum } from 'pages'

export const Navbar = () => {
  // utils
  const navigate = useNavigate()

  return (
    <StyledNavbar>
      <div>
        <NavLinkCustom onClick={() => navigate(PathsEnum.dogs)}>{<SiDatadog size="2rem" color="white" />}</NavLinkCustom>
      </div>
      <div>
        <NavLink to={PathsEnum.dogs}>Dogs</NavLink>
      </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  position: fixed;
  inset-inline: 0;
  top: 0;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.normal};
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary.lightest};
  z-index: 2;
  padding: 0 1rem;

  a {
    display: inline-block;
    padding-block: 0.875em;
    font-size: ${({ theme }) => theme.typography.p};

    &:not(.active):hover {
      color: ${({ theme }) => theme.colors.white};
    }

    &.active {
      color: white;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: -0.1rem;
        right: -0.1rem;
        border-bottom: 0.25rem solid white;
        border-radius: 0.2rem 0.2rem 0 0;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex: 1;
  }
`
