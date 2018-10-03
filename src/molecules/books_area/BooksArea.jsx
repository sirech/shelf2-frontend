// @flow

import React from 'react'

import styles from './styles.module.css'

import { Route } from 'react-router-dom'

import authenticated from 'organisms/authenticated'
import BookCreator from 'organisms/book_creator'
import BookList from 'organisms/book_list'
import Navigation from 'organisms/navigation'

const AuthBookCreator = authenticated()(BookCreator)

const BooksArea = () => (
  <div className={styles.grid}>
    <main>
      <AuthBookCreator />
      <Route exact path="/books/:year" component={BookList} />
    </main>
    <Navigation />
  </div>
)

export default BooksArea
