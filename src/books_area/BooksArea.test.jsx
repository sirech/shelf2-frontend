import React from 'react'
import BooksArea from './BooksArea'
import { fullRender } from 'test'

jest.mock('rest/fetch')

describe('components', () => {
  describe('BooksArea', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<BooksArea />, {}, '/books/2016')
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
