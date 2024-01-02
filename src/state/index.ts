import { ThunkAction, UnknownAction, configureStore } from '@reduxjs/toolkit'

import { constants as booksConstants, reducer as booksReducer } from './books'
import {
  constants as searchConstants,
  reducer as searchReducer,
} from './search'
import { constants as yearsConstants, reducer as yearsReducer } from './years'

const store = configureStore({
  reducer: {
    [booksConstants.namespace]: booksReducer,
    [searchConstants.namespace]: searchReducer,
    [yearsConstants.namespace]: yearsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>

export default store
