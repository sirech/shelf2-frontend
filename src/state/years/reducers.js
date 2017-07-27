import update from 'immutability-helper'
import R from 'ramda'

import { RECEIVE_YEARS } from './constants'
import { constants } from '../form'

const initialState = { entities: { years: {} }, result: [] }

const newYear = (state, year) => {
  return update(state,
    {
      entities: {
        years: { $merge: { [year]: { year: year, count: 1 } } }
      },

      result: { $apply: list => R.pipe(R.append(year), R.sortBy(R.identity))(list) }
    })
}

const increaseExisting = (state, year) => {
  return update(state,
    {
      entities: {
        years: {
          [year]: {
            count: { $apply: counter => counter + 1 }
          }
        }
      }
    })
}

const updateYear = (state, year) => {
  const yearList = state.result

  if (R.contains(year, yearList)) {
    return increaseExisting(state, year)
  } else {
    return newYear(state, year)
  }
}

export default function years (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_YEARS:
      return { ...state, ...action.payload }
    case constants.BOOK_CREATE_SUCCESS:
      return updateYear(state, action.payload.year)
    default:
      return state
  }
}
