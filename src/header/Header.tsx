// @flow

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Helmet } from 'react-helmet'

import Logout from './Logout'
import SearchBar from './SearchBar'

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap'

const Login = () => (
  <NavItem>
    <Link to="/login" className="nav-link">
      Login
    </Link>
  </NavItem>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
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
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
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

export default Header
