// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Helmet } from 'react-helmet'

import authenticated from 'organisms/authenticated'
import Logout from 'organisms/logout'
import SearchBar from 'organisms/search_bar'

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap'

const Login = authenticated(false)(() => (
  <NavItem>
    <Link to="/login" className="nav-link">
      Login
    </Link>
  </NavItem>
))

type State = {
  isOpen: boolean,
}

class Header extends React.Component {
  state: State
  toggle: Function

  constructor() {
    super()

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <header className="mb-4">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Shelf</title>
        </Helmet>
        <Navbar dark color="dark" expand="sm">
          <LinkContainer to="/books">
            <NavbarBrand>Shelf</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <SearchBar />
              <Login />
              <Logout />
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header
