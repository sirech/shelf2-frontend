import React from 'react'
import renderer from 'react-test-renderer'
import NewBook from './NewBook'

describe('components', () => {
  describe('NewBook', () => {
    it('renders correctly', () => {
      const component = renderer.create(<NewBook />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
