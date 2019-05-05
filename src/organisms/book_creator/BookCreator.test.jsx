import React from 'react'
import renderer from 'react-test-renderer'

import { BookCreator } from './BookCreator'

describe('components', () => {
  describe('BookCreator', () => {
    it('renders correctly', () => {
      const component = renderer.create(<BookCreator />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
