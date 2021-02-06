import React from 'react'

import Navigation from './Navigation'
import { fullRender } from 'test'
import state from 'state/__fixtures__'

// Mock thunk that triggers API request
import { actions } from 'state/years'
jest.mock('state/years/actions', () => ({
  fetchYears: jest.fn((dispatch) => jest.fn()),
}))

describe('components', () => {
  describe('Navigation', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('renders correctly', () => {
      const { component } = fullRender(<Navigation />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('fetches the years at the beginning', () => {
      fullRender(<Navigation />, state())
      expect(actions.fetchYears.mock.calls.length).toBe(1)
    })
  })
})
