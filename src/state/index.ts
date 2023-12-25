import { ThunkAction, UnknownAction, configureStore } from '@reduxjs/toolkit'

import { constants as booksConstants, reducer as booksReducer } from './books'
import {
  constants as searchConstants,
  reducer as searchReducer,
} from './search'
import { constants as yearsConstants, reducer as yearsReducer } from './years'
import { constants as loginConstants, reducer as loginReducer } from './login'

const store = configureStore({
  reducer: {
    [booksConstants.namespace]: booksReducer,
    [searchConstants.namespace]: searchReducer,
    [yearsConstants.namespace]: yearsReducer,
    [loginConstants.namespace]: loginReducer,
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
