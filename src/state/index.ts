import { combineReducers } from 'redux'

import { constants as booksConstants, reducer as booksReducer } from './books'
import {
  constants as searchConstants,
  reducer as searchReducer,
} from './search'
import { constants as yearsConstants, reducer as yearsReducer } from './years'
import { constants as loginConstants, reducer as loginReducer } from './login'

const rootReducer = combineReducers({
  [booksConstants.namespace]: booksReducer,
  [searchConstants.namespace]: searchReducer,
  [yearsConstants.namespace]: yearsReducer,
  [loginConstants.namespace]: loginReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
