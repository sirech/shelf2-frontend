import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Header from 'header'
import BooksArea from 'books_area'

import SearchList from 'search_list'
import Callback from 'callback'
import Login from 'login'
import NewBook from 'new_book'

const year = new Date().getFullYear()

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Content />
        </div>
      </Router>
    )
  }
}

const Content = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/books" />} />
    <Route path="/books" element={<Navigate to={`/books/${year}`} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/callback" element={<Callback />} />
    <Route path="/books/search" element={<Navigate replace to="/books" />} />
    <Route path="/books/search/:keyword" element={<SearchList />} />
    <Route path="/books/new" element={<NewBook />} />
    <Route path="/books/:year" element={<BooksArea />} />
  </Routes>
)

export default App
