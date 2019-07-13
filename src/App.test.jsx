import React from 'react'
import { fullRender } from 'test'

import App from './App'

jest.mock('rest/fetch')

describe('components', () => {
  describe('App', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<App />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
