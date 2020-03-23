import { combineReducers } from 'redux'

import * as R from 'ramda'

import { constants as booksConstants, reducer as booksReducer } from './books'
import {
  constants as searchConstants,
  reducer as searchReducer,
} from './search'
import { constants as yearsConstants, reducer as yearsReducer } from './years'
import { constants as loginConstants, reducer as loginReducer } from './login'

export const actionPicker = (list) => {
  return (actions) => {
    const h = R.pick(list)(actions)

    if (Object.keys(h).length !== list.length) {
      throw new Error(
        `Not all requested actions (${list}) exist in the given actions`
      )
    }

    return h
  }
}

const rootReducer = combineReducers({
  [booksConstants.namespace]: booksReducer,
  [searchConstants.namespace]: searchReducer,
  [yearsConstants.namespace]: yearsReducer,
  [loginConstants.namespace]: loginReducer,
})

export default rootReducer
