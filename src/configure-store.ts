import rootReducer from 'state'

import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default (initialState: object = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
