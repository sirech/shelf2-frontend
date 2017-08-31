import R from 'ramda'

import { loginSelector } from '../../state/login'

const selector = R.pipe(loginSelector, R.path(['authenticated']))
export default selector
