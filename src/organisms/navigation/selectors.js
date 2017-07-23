import R from 'ramda'

import { yearsSelector as baseSelector } from '../../state/years'

const yearsSelector = R.pipe(baseSelector, R.path(['entities', 'years']), R.values)
export default yearsSelector
