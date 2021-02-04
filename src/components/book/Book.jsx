// @flow

import React from 'react'

import Stars from 'components/stars'

import styles from './styles.module.css'

import type { Book as BookType } from 'types'

const Book = ({ title, stars }: BookType) => (
  <div className={styles.book}>
    <h5>{title}</h5>
    <Stars count={stars} />
  </div>
)

export default Book
