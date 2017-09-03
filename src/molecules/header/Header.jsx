import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Helmet } from 'react-helmet'

import authenticated from '../../organisms/authenticated'
import Logout from '../../organisms/logout'

import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler } from 'reactstrap'

const Login = authenticated(false)(() => (
  <NavItem>
    <Link to='/login' className='nav-link'>Login</Link>
  </NavItem>
))

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <header className='mb-4'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Shelf</title>
        </Helmet>
        <Navbar inverse color='inverse' toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <LinkContainer to='/books' >
            <NavbarBrand>Shelf</NavbarBrand>
          </LinkContainer>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
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
