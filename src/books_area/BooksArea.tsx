// @flow

import React from 'react'

import { Route } from 'react-router-dom'
import styles from './styles.module.css'

import BookCreator from './BookCreator'
import BookList from 'book-list'
import Navigation from 'navigation'

const BooksArea = () => (
  <div className={styles.grid}>
    <main>
      <BookCreator />
      <Route exact path="/books/:year" component={BookList} />
    </main>
    <Navigation />
  </div>
)

export default BooksArea
