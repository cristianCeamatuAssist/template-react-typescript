import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// components
import App from './App'
// global state
import { store } from 'state'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>{' '}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
