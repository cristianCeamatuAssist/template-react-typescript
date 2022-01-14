import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s ease;
  }

  body {
    min-width: 320px;
    height: 100vh;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1rem;
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.typography.h1};
  }

  h2, .h2 {
    margin-bottom: 0.875rem;
    font-size: ${({ theme }) => theme.typography.h2};
  }

  h3, .h3 {
    font-size: ${({ theme }) => theme.typography.h3};
  }

  p, .p {
    font-size: ${({ theme }) => theme.typography.p};
  }

  .small {
    font-size: ${({ theme }) => theme.typography.small};
  }

  ul {
    list-style-type: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;

    :hover {
      opacity: .9;
    }
  }

  // Helpers
  .inactive {
    pointer-events: none;
    opacity: .8;
  }

  // Scroll bar
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.secondary};

    &:hover {
      background: ${({ theme }) => theme.colors.black};
    }
  }
`
