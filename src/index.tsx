import React from 'react'
// eslint-disable-next-line import/no-internal-modules
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './state'

// eslint-disable-next-line import/no-internal-modules
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
