import produce from 'immer'
import * as R from 'ramda'

import { RECEIVE_YEARS } from './constants'
import { constants } from '../form'

const initialState = { entities: { years: {} }, result: [] }

const newYear = (draft, year) => {
  draft.entities.years[year] = { year: year, count: 1 }
  draft.result = R.pipe(R.append(year), R.sortBy(R.identity))(draft.result)
}

const increaseExisting = (draft, year) => {
  const entity = draft.entities.years[year]
  entity.count = entity.count + 1
}

export default function years(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case RECEIVE_YEARS: {
        const { entities, result } = action.payload
        draft.entities = entities
        draft.result = result
        break
      }
      case constants.BOOK_CREATE_SUCCESS: {
        const year = action.payload.year
        const yearList = state.result

        if (R.contains(year, yearList)) {
          increaseExisting(draft, year)
        } else {
          newYear(draft, year)
        }
        break
      }
      default:
        break
    }
  })
}
