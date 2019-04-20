import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Header from 'molecules/header'
import BooksArea from 'molecules/books_area'

import SearchList from 'organisms/search_list'
import Callback from 'organisms/callback'
import Login from 'organisms/login'
import LoginStatusChecker from 'organisms/login_status_checker'

const year = new Date().getFullYear()

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Checks />
          <Header />
          <Content />
        </div>
      </Router>
    )
  }
}

const Checks = () => (
  <div>
    <Route exact path="/" render={() => <Redirect to="/books" />} />
    <Route
      exact
      path="/books"
      render={() => <Redirect to={`/books/${year}`} />}
    />
    <LoginStatusChecker />
  </div>
)

const Content = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/callback" component={Callback} />
    <Route exact path="/books/search" render={() => <Redirect to="/books" />} />
    <Route exact path="/books/search/:keyword" component={SearchList} />
    <Route component={BooksArea} />
  </Switch>
)

export default App
