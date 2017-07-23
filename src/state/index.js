import { combineReducers } from 'redux'

import { constants as booksConstants, reducer as booksReducer } from './books'
import { constants as yearsConstants, reducer as yearsReducer } from './years'
import { constants as formConstants, reducer as formReducer } from './form'

const rootReducer = combineReducers({
  [booksConstants.namespace]: booksReducer,
  [yearsConstants.namespace]: yearsReducer,
  [formConstants.namespace]: formReducer
})

export default rootReducer
