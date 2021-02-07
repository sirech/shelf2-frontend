import React from 'react'
import App from './App'
import { fullRender } from 'test'

jest.mock('rest/fetch')

describe('components', () => {
  describe('App', () => {
    it('renders correctly', () => {
      fullRender(<App />)
    })
  })
})
