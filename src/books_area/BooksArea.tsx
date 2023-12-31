import React from 'react'

import styles from './styles.module.css'

import BookCreator from './BookCreator'
import BookList from 'book-list'
import Navigation from 'navigation'

const BooksArea = () => (
  <div className={styles.grid}>
    <main>
      <BookCreator />
      <BookList />
    </main>
    <Navigation />
  </div>
)

export default BooksArea
