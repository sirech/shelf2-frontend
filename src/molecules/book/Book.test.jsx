import React from 'react'
import renderer from 'react-test-renderer'
import Book from './Book'

describe('components', () => {
  describe('Book', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Book title='Catch-22' stars={3} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
