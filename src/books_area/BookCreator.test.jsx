import React from 'react'
import renderer from 'react-test-renderer'

import { BookCreator } from './BookCreator'

describe('components', () => {
  describe('BookCreator', () => {
    // TODO: wrap in route
    it.skip('renders correctly', () => {
      const component = renderer.create(<BookCreator />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})