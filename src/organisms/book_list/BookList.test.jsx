import React from 'react'
import renderer from 'react-test-renderer'

import { fullRender } from '../../test'
import state from '../../state/__fixtures__'
import BookList, { BookList as TestBookList } from './BookList'

describe('components', () => {
  describe('BookList', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<BookList />, state())
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('fetches the books when there is a change in the year', () => {
      const match = { params: { year: '2017' } }
      const fetchBooks = jest.fn()

      renderer.create(<TestBookList match={match} fetchBooks={fetchBooks} />)
      expect(fetchBooks.mock.calls.length).toBe(1)
      expect(fetchBooks.mock.calls[0][0]).toBe('2017')
    })
  })
})
