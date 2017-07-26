import { combineReducers } from 'redux'

import { constants as booksConstants, reducer as booksReducer } from './books'
import { constants as yearsConstants, reducer as yearsReducer } from './years'
import { constants as formConstants, reducer as formReducer } from './form'
import { constants as modalConstants, reducer as modalReducer } from './modal'

const rootReducer = combineReducers({
  [booksConstants.namespace]: booksReducer,
  [yearsConstants.namespace]: yearsReducer,
  [formConstants.namespace]: formReducer,
  [modalConstants.namespace]: modalReducer
})

export default rootReducer
