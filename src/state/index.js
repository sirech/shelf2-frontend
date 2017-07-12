import { combineReducers } from 'redux'

import { constants as booksConstants, reducer as booksReducer } from './books'

const rootReducer = combineReducers({
  [booksConstants.namespace]: booksReducer
})

export default rootReducer
