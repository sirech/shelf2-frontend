import React from 'react'
import renderer from 'react-test-renderer'
import SimpleBookList from './SimpleBookList'

describe('components', () => {
  describe('SimpleBookList', () => {
    it('renders correctly', () => {
      const component = renderer.create(
        <SimpleBookList books={[{ id: 1, title: 'Catch 22', stars: 3 }]} />
      )
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
