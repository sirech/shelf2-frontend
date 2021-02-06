import { RootState } from 'state'
import { namespace } from './constants'

const yearsSelector = (state: RootState) => state[namespace]
export default yearsSelector
