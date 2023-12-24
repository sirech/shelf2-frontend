import { namespace } from './constants'
import { RootState } from 'state'

const yearsSelector = (state: RootState) => state[namespace]
export default yearsSelector
