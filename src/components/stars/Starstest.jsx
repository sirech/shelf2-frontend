import React from 'react'
import renderer from 'react-test-renderer'
import Stars from './Stars'

describe('components', () => {
  describe('Stars', () => {
    it('renders correctly', () => {
      const component = renderer.create(<Stars count={3} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
