// @flow

import React from 'react'

import { Card, CardHeader, ListGroup } from 'reactstrap'

import Book from '../book'

import type { Category as CategoryType } from '../../types'

const Category = ({name, books}: CategoryType) => (
  <Card className='mb-3'>
    <CardHeader>
      <h4 className='d-inline-block'>{name}</h4>
    </CardHeader>
    <ListGroup className='list-unstyled mb-0'>
      {books.map(book =>
        <Book key={book.id} {...book} />
      )}
    </ListGroup>
  </Card>
)

export default Category
