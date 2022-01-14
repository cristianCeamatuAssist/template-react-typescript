// pages
import { Router } from 'pages'
import { Theme, GlobalStyles } from 'components'

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  )
}

export default App
