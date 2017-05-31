import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { Col, Container, Row } from 'reactstrap'

import Header from './molecules/header'
import BookList from './organisms/book_list'
import Navigation from './organisms/navigation'

const year = new Date().getFullYear()

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Container fluid>
            <Route exact path='/books' render={() => (
              <Redirect to={`/books/${year}`} />
            )} />
            <Route exact path='/books/:year' component={Home} />
          </Container>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <Row>
    <Col sm='8' md='9' lg='10'>
      <BookList />
    </Col>
    <Col sm='4' md='3' lg='2'>
      <Navigation />
    </Col>
  </Row>
)

export default App
