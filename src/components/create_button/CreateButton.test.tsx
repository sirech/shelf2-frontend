import React from 'react'
import renderer from 'react-test-renderer'
import CreateButton from './CreateButton'

describe('components', () => {
  describe('CreateButton', () => {
    it('renders correctly', () => {
      const component = renderer.create(<CreateButton />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
