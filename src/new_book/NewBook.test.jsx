import React from 'react'
import NewBook from './NewBook'
import { fullRender } from 'test'

describe('components', () => {
  describe('NewBook', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<NewBook />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
