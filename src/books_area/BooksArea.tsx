// @flow

import React from 'react'

import styles from './styles.module.css'

import { Route } from 'react-router-dom'

import BookList from 'book-list'
import Navigation from 'navigation'

import BookCreator from './BookCreator'

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
