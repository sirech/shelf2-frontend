import React from 'react'
import Header from './Header'
import { fullRender } from 'test'

describe('components', () => {
  describe('Header', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<Header />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
