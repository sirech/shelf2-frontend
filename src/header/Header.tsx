import React, { useState } from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap'
import SearchBar from './SearchBar'

type ClickHandler = { onClick: () => void }

const Login = ({ onClick }: ClickHandler) => (
  <NavItem onClick={onClick} className="nav-link" role="link">
    Login
  </NavItem>
)

const Logout = ({ onClick }: ClickHandler) => (
  <NavItem onClick={onClick} className="nav-link" role="link">
    Logout
  </NavItem>
)

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <header className="mb-4">
      <Navbar dark color="dark" expand="sm">
        <NavbarBrand onClick={() => void navigate('/books')}>Shelf</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <SearchBar />
            {!isAuthenticated && (
              <Login onClick={() => void loginWithRedirect()} />
            )}
            {isAuthenticated && (
              <Logout onClick={() => void logout({ openUrl: false })} />
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default Header
