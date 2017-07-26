import state from '../../__fixtures__'
import formSelector, { bookSelector } from '../selectors'

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
})
