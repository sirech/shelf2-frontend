import React from 'react'
import renderer from 'react-test-renderer'
import Category from './Category'

describe('components', () => {
  describe('Category', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Category name='Software' books={[{id: 1, title: 'Catch 22', stars: 3}]} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
