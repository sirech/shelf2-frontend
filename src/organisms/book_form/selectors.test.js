import state from '../../state/__fixtures__'
import { starsSelector } from './selectors'

describe('selectors', () => {
  describe('starsSelector', () => {
    it('selects the form', () => {
      expect(starsSelector(state())).toEqual(1)
    })
  })
})
