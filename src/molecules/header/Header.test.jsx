import React from 'react'
import { fullRender } from '../../test'
import Header from './Header'

describe('components', () => {
  describe('Header', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<Header />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
