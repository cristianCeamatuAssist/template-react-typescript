import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
// types and utils
import { IChildrenNode } from 'types'

export const theme = {
  borderRadius: '4px',
  spacing: '1rem',
  colors: {
    secondary: '#B9D4E8',
    ternary: '#395264',
    primary: {
      normal: '#29578A',
      light: '#617B8E',
      lighter: '#8CA6BA',
      lightest: '#B9D4E8',
    },

    error: '#E94141',
    warning: '#E9A641',
    success: '#49C464',

    grey: {
      normal: '#727279',
      light: '#808080',
      lighter: '#D3D4D8',
      lightest: '#FAFAFA',
    },

    black: '#112D3D',
    white: '#FFFFFF',
  },

  borders: {
    normal: '1px solid #D3D4D8',
  },

  fontWeight: {
    bold: 600,
    normal: 400,
  },

  fontFamily: {
    openSans: 'Open Sans',
  },

  typography: {
    small: '0.75rem',
    p: '0.875rem', // 14px
    h1: '1.5em',
    h2: '1.25em',
    h3: '1.1em',
  },

  constants: {
    navbarHeight: '2.84375rem', // 45.55px
    workQueueTopNavHeight: '2.8125rem', // 45px
    tableHeadHeight: '5rem', // 45px
    paginationHeight: '1.375rem', // 22px
  },

  breakpoints: {
    xs: '0',
    sm: '37.5em', // 600px
    md: '56.25em', // 900px
    lg: '75em', // 1200px
    xl: '96em', // 1536px
  },

  shadows: {
    normal: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    light: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    intense: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },

  zIndex: {
    topNavbar: '10',
    navbar: '20',
  },
}

export const Theme = ({ children }: IChildrenNode) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
