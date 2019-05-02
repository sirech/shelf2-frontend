import React from 'react'
import { fullRender } from 'test'
import NewBook from './NewBook'

describe('components', () => {
  describe('NewBook', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<NewBook />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
