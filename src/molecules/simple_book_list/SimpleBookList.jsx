// @flow

import React from 'react'

import Book from 'molecules/book'

import type { Book as BookType } from 'types'

const SimpleBookList = ({ books }: { books: Array<BookType> }) => (
  <ul className="list-unstyled mb-0">
    {books.map((book) => (
      <li key={book.id} className="book-list-item">
        <Book {...book} />
      </li>
    ))}
  </ul>
)

export default SimpleBookList
