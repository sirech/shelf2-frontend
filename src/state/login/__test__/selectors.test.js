import state from '../../__fixtures__'
import selector, { authenticatedSelector, failedSelector } from '../selectors'

describe('selectors', () => {
  describe('login selector', () => {
    it('selects the login', () => {
      expect(selector(state())).toMatchSnapshot()
    })
  })

  describe('authenticatedSelector', () => {
    it('selects the authenticated field', () => {
      expect(authenticatedSelector(state())).toMatchSnapshot()
    })
  })

  describe('failedSelector', () => {
    it('selects the authenticated field', () => {
      expect(failedSelector(state())).toMatchSnapshot()
    })
  })
})
