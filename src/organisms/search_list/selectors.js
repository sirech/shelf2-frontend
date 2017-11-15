import * as R from 'ramda'

import { searchSelector as baseSelector } from '../../state/search'

const searchSelector = R.pipe(baseSelector, R.path(['entities', 'books']), R.values)

export default searchSelector
