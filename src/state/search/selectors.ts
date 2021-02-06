import { RootState } from 'state'

import { namespace } from './constants'

const searchSelector = (state: RootState) => state[namespace]
export default searchSelector
