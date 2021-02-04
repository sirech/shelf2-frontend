import { RootState } from './../index'

import { namespace } from './constants'

const booksSelector = (state: RootState) => state[namespace]
export default booksSelector
