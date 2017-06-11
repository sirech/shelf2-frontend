import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { Col, Container, Row } from 'reactstrap'

import Header from './molecules/header'
import BookCreator from './organisms/book_creator'
import BookList from './organisms/book_list'
import Navigation from './organisms/navigation'

const year = new Date().getFullYear()

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/books' render={() => (
            <Redirect to={`/books/${year}`} />
          )} />
          <Header />
          <Content />
        </div>
      </Router>
    )
  }
}
const Content = () => (
  <Container fluid>
    <Row>
      <Col sm='8' md='9' lg='10'>
        <BookCreator />
        <Route exact path='/books/:year' component={BookList} />
      </Col>
      <Col sm='4' md='3' lg='2'>
        <Navigation />
      </Col>
    </Row>
  </Container>
)

export default App
