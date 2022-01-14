import styled from 'styled-components'
// types
import { IChildrenNode } from 'types'
// components
import { Navbar } from 'components'

export const Layout = ({ children }: IChildrenNode) => {
  return (
    <StyleLayout>
      <Navbar />

      <main>{children}</main>
    </StyleLayout>
  )
}

export const StyleLayout = styled.div`
  height: 100vh;

  main {
    height: 100vh;
    margin-top: ${({ theme }) => theme.constants.navbarHeight};
  }
`
