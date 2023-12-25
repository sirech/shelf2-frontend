import { Dispatch } from 'redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetch, normalizeBooks } from 'rest'
import { Book, NormalizedBooks } from 'types'
import { AppThunk } from 'state'

const initialState: NormalizedBooks = {
  entities: { books: {} },
  result: [],
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    receivedSearchResult(state, action: PayloadAction<NormalizedBooks>) {
      const { entities, result } = action.payload
      state.entities = entities
      state.result = result
    },
  },
})

export const { receivedSearchResult } = searchSlice.actions

export const search = (keyword: string): AppThunk<Promise<void>> => {
  return async (dispatch: Dispatch) => {
    const url = `/books/search/${keyword}`

    const response = await fetch<Book[]>(url)
    const books = normalizeBooks(response.data)
    dispatch(receivedSearchResult(books))
  }
}

export default searchSlice.reducer
