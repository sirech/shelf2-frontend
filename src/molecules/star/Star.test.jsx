import React from 'react'
import renderer from 'react-test-renderer'
import Star from './Star'

describe('components', () => {
  describe('Star', () => {
    it('renders a full star correctly', () => {
      const component = renderer.create(<Star isFull />)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('renders a half star correctly', () => {
      const component = renderer.create(<Star isFull={false} />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
