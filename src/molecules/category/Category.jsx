// @flow

import React from 'react'

import { Card, CardHeader } from 'reactstrap'

import SimpleBookList from 'molecules/simple_book_list'

import './styles.css'

import type { Category as CategoryType } from 'types'

const Category = ({name, books}: CategoryType) => (
  <Card className='mb-3'>
    <CardHeader>
      <h4 className='d-inline-block'>{name}</h4>
    </CardHeader>
    <SimpleBookList books={books} />
  </Card>
)

export default Category
