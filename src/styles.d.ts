import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    spacing: string

    typography: {
      small: string
      p: string
      h1: string
      h2: string
      h3: string
    }

    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }

    shadows: {
      normal: string
      light: string
      intense: string
    }

    constants: {
      navbarHeight: string
      workQueueTopNavHeight: string
      tableHeadHeight: string
      paginationHeight: string
    }

    zIndex: {
      navbar: string
      topNavbar: string
    }

    colors: {
      primary: {
        normal: string
        light: string
        lighter: string
        lightest: string
      }
      secondary: string
      ternary: string

      error: string
      warning: string
      success: string

      grey: {
        normal: string
        light: string
        lighter: string
        lightest: string
      }

      black: string
      white: string
    }

    borders: {
      normal: string
    }

    fontWeight: {
      bold: number
      normal: number
    }

    fontFamily: {
      openSans: string
    }
  }
}
