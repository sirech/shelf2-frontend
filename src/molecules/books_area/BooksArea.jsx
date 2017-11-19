// @flow

import React from 'react'

import { Route } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import authenticated from 'organisms/authenticated'
import BookCreator from 'organisms/book_creator'
import BookList from 'organisms/book_list'
import Navigation from 'organisms/navigation'

const AuthBookCreator = authenticated()(BookCreator)

const BooksArea = () => (
  <Row>
    <Col xs='12' sm='8' md='9' lg='10'>
      <AuthBookCreator />
      <Route exact path='/books/:year' component={BookList} />
    </Col>
    <Col sm='4' md='3' lg='2'>
      <Navigation />
    </Col>
  </Row>
)

export default BooksArea
