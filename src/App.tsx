// styles and assets
import 'bootstrap/dist/css/bootstrap.min.css'
import { Theme, GlobalStyles } from 'assets'
// pages
import { Router } from 'pages'

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  )
}

export default App
