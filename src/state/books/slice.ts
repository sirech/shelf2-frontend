import { Dispatch } from 'redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetch, normalizeBooks } from 'rest'
import { NormalizedBooks, Book } from 'types'

import { actions } from 'state/form'

const initialState: NormalizedBooks & { activeYear: number } = {
  entities: { books: {} },
  result: [],
  activeYear: 0,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    receivedBooks(state, action: PayloadAction<NormalizedBooks>) {
      const { entities, result } = action.payload
      state.entities = entities
      state.result = result
    },
    activeYearMarked(state, action: PayloadAction<number>) {
      state.activeYear = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.bookCreated, (state, action) => {
      const book = action.payload
      if (state.activeYear === book.year) {
        state.entities.books[book.id] = book
        state.result.push(book.id)
      }
    })
  },
})

export const { receivedBooks, activeYearMarked } = booksSlice.actions

export function fetchBooks(year: string) {
  return async (dispatch: Dispatch) => {
    const url = `/books?year=${year}`

    const response = await fetch<Book[]>(url)
    const books = normalizeBooks(response.data)
    dispatch(receivedBooks(books))
    return dispatch(activeYearMarked(parseInt(year, 10)))
  }
}

export default booksSlice.reducer
