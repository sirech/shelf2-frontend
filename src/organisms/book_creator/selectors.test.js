import state from '../../state/__fixtures__'
import { openedSelector, validSelector } from './selectors'

describe('selectors', () => {
  describe('openedSelector', () => {
    it('selects the opened status', () => {
      expect(openedSelector(state())).toEqual(false)
    })
  })

  describe('validSelector', () => {
    it('selects the validity of the form', () => {
      expect(validSelector(state())).toEqual(true)
    })
  })
})
