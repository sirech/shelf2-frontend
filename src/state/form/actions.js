// @flow

import { actions } from 'react-redux-form'

import { modelName } from './utils'

export function changeStars (count: number) {
  return (dispatch: Dispatch) => {
    dispatch(actions.change(modelName('stars'), count))
  }
}
