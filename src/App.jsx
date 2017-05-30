import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Col, Container, Row } from 'reactstrap'

import Header from './molecules/header'
import Navigation from './organisms/navigation'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Container fluid>
            <Route path='/' component={Home} />
          </Container>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <Row>
    <Col sm='4' md='3' lg='2'>
      <Navigation />
    </Col>
  </Row>
)

export default App
