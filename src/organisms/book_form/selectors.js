import R from 'ramda'

import { bookSelector } from '../../state/form'

export const starsSelector = R.pipe(bookSelector, R.path(['stars']))
