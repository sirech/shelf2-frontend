import produce from 'immer'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './constants'

const initialState = { authenticated: false, failed: false }

export function status(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.authenticated = true
        draft.failed = false
        break
      case LOGIN_FAILURE:
        draft.failed = true
        break
      case LOGOUT_SUCCESS:
        draft.authenticated = false
        break
    }
  })
}

export default status
