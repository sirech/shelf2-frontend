import { namespace } from './constants'
import { RootState } from 'state'

const searchSelector = (state: RootState) => state[namespace]
export default searchSelector
