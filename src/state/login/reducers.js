import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './constants'

const initialState = { authenticated: false, failed: false }

export function status (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true, failed: false }
    case LOGIN_FAILURE:
      return { ...state, failed: true }
    case LOGOUT_SUCCESS:
      return { ...state, authenticated: false }
    default:
      return state
  }
}

export default status
