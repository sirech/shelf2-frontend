import { modelName } from '../utils'

describe('utils', () => {
  describe('modelName', () => {
    it('returns the model', () => {
      expect(modelName()).toEqual('form.book')
    })

    it('returns the model and the field if one is provided', () => {
      expect(modelName('years')).toEqual('form.book.years')
    })
  })
})
