import { combineReducers } from 'redux'

import { constants as booksConstants, reducer as booksReducer } from './books'
import { constants as yearsConstants, reducer as yearsReducer } from './years'

const rootReducer = combineReducers({
  [booksConstants.namespace]: booksReducer,
  [yearsConstants.namespace]: yearsReducer
})

export default rootReducer
