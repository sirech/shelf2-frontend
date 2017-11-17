// @flow

import * as R from 'ramda'

import { fieldSelectorBuilder } from 'state/form'

const selectorBuilder = (field: string) => (state: Object, props: { name: string }) => R.pipe(fieldSelectorBuilder(props.name), R.path([field]))(state)

export const validSelector = selectorBuilder('valid')
export const touchedSelector = selectorBuilder('touched')
