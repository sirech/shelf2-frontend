import { Dispatch } from 'redux'

import * as R from 'ramda'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetch, normalizeYears } from 'rest'
import { NormalizedYears, Year } from 'types'

import { actions } from 'state/form'

const initialState: NormalizedYears = { entities: { years: {} }, result: [] }

const newYear = (draft: NormalizedYears, year: number) => {
  draft.entities.years[year] = { year: year, count: 1 }
  draft.result = R.pipe(R.append(year), R.sortBy(R.identity))(draft.result)
}

const increaseExisting = (draft: NormalizedYears, year: number) => {
  const entity = draft.entities.years[year]
  entity.count = entity.count + 1
}

const yearsSlice = createSlice({
  name: 'years',
  initialState,
  reducers: {
    receivedYears(state, action: PayloadAction<NormalizedYears>) {
      const { entities, result } = action.payload
      state.entities = entities
      state.result = result
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.bookCreated, (state, action) => {
      const year = action.payload.year
      const yearList = state.result

      if (R.contains(year, yearList)) {
        increaseExisting(state, year)
      } else {
        newYear(state, year)
      }
    })
  },
})

export const { receivedYears } = yearsSlice.actions

export function fetchYears() {
  return async (dispatch: Dispatch) => {
    const url = '/books/years'

    const response = await fetch<Year[]>(url)
    const years = normalizeYears(response.data)
    dispatch(receivedYears(years))
  }
}

export default yearsSlice.reducer
