import React from 'react'
import { fullRender } from './test'
import App from './App'

describe('components', () => {
  describe('App', () => {
    xit('renders correctly', () => {
      const { component } = fullRender(<App />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})