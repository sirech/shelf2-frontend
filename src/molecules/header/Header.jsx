import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Helmet } from 'react-helmet'

import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler } from 'reactstrap'

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
          <LinkContainer to='/' >
            <NavbarBrand>Shelf</NavbarBrand>
          </LinkContainer>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/books' className='nav-link'>Books</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header
