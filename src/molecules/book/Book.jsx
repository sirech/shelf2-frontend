// @flow

import React from 'react'

import Stars from '../stars'

import './styles.css'

import type { Book as BookType } from '../../types'

const Book = ({title, stars}: BookType) => (
  <div className='book'>
    <h5>{title}</h5>
    <Stars count={stars} />
  </div>
)

export default Book
