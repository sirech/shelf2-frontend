import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'reactstrap'

import Header from './molecules/header'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Container fluid>
            <Route exact path='/' component={Home} />
          </Container>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <p className='App-intro'>
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

export default App
