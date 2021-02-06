import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configure-store'

// eslint-disable-next-line import/no-internal-modules
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
