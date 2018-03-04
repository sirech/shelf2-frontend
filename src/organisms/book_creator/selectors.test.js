import state from 'state/__fixtures__'
import { openedSelector, errorSelector, validSelector } from './selectors'

describe('selectors', () => {
  describe('openedSelector', () => {
    it('selects the opened status', () => {
      expect(openedSelector(state())).toEqual(false)
    })
  })

  describe('errorSelector', () => {
    it('selects the error status', () => {
      expect(errorSelector(state())).toEqual(false)
    })
  })

  describe('validSelector', () => {
    it('selects the validity of the form', () => {
      expect(validSelector(state())).toEqual(true)
    })
  })
})
