import React from 'react'
import { fullRender } from 'test'

import BooksArea from './BooksArea'

describe('components', () => {
  describe('BooksArea', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<BooksArea />, {}, '/books/2016')
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
