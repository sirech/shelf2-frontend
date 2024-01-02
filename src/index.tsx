import React from 'react'
// eslint-disable-next-line import/no-internal-modules
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'
import store from './state'

// eslint-disable-next-line import/no-internal-modules
import 'bootstrap/dist/css/bootstrap.css'

const host = () => process.env.REACT_APP_HOST || ''
const redirectUri = () => `${host()}/callback`

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="hceris.eu.auth0.com"
      clientId="xwIxFMYa0YtuNexQzbZ642vF3L9BQiSd"
      scope="profile create:books"
      audience="shelf2.hceris.com"
      redirectUri={redirectUri()}
    >
      <App />
    </Auth0Provider>
  </Provider>
)
