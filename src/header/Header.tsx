import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap'
import Logout from './Logout'
import SearchBar from './SearchBar'

const Login = () => (
  <NavItem>
    <Link to="/login" className="nav-link">
      Login
    </Link>
  </NavItem>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <header className="mb-4">
      <Navbar dark color="dark" expand="sm">
        <NavbarBrand onClick={() => navigate('/books')}>Shelf</NavbarBrand>
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
