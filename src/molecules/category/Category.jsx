// @flow

import React from 'react'

import { Card, CardHeader } from 'reactstrap'

import Book from '../book'

import './styles.css'

import type { Category as CategoryType } from '../../types'

const Category = ({name, books}: CategoryType) => (
  <Card className='mb-3'>
    <CardHeader>
      <h4 className='d-inline-block'>{name}</h4>
    </CardHeader>
    <ul className='list-unstyled mb-0'>
      {books.map(book =>
        <li className='book-list-item'>
          <Book key={book.id} {...book} />
        </li>
      )}
    </ul>
  </Card>
)

export default Category
