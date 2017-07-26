import R from 'ramda'

import { modalSelector as baseSelector } from '../../state/modal'

const openedSelector = R.pipe(baseSelector, R.path(['opened']))

export default openedSelector
