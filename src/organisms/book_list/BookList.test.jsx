import React from 'react'
import renderer from 'react-test-renderer'
import BookList from './BookList'

describe('components', () => {
  describe('BookList', () => {
    it('renders correctly', () => {
      const component = renderer.create(<BookList />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
