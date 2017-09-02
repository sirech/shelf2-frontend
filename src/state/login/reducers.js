import { namespace, loginModel, LOGIN_SUCCESS } from './constants'
import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

const initialState = { authenticated: false }

export function status (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true }
    default:
      return state
  }
}

const initialLogin = {
  user: '',
  password: ''
}

const reducer = combineReducers({
  status,
  form: combineForms({
    [loginModel]: initialLogin
  }, `${namespace}.form`)
})

export default reducer
