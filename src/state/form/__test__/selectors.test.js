import state from '../../__fixtures__'
import { formSelector, bookSelector, fieldSelectorBuilder } from '../selectors'

describe('selectors', () => {
  describe('formSelector', () => {
    it('selects the form', () => {
      expect(formSelector(state())).toMatchSnapshot()
    })
  })

  describe('bookSelector', () => {
    it('selects the form', () => {
      expect(bookSelector(state())).toMatchSnapshot()
    })
  })

  describe('fieldSelectorBuilder', () => {
    it('selects a concrete field', () => {
      expect(fieldSelectorBuilder('title')(state())).toMatchSnapshot()
    })
  })
})
