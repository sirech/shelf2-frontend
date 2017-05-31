// @flow

import React from 'react'

import Stars from '../stars'

import type { Book as BookType } from '../../types'

const Book = ({title, stars}: BookType) => (
  <li>
    <h5>{title}</h5>
    <Stars count={stars} />
  </li>
)

export default Book
