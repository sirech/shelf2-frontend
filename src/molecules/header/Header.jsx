import React from 'react'
import { Link } from 'react-router-dom'

import { Collapse, Nav, Navbar, NavItem, NavbarToggler } from 'reactstrap'

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
      <header>
        <Navbar inverse color='inverse'>
          <NavbarToggler right onClick={this.toggle} />
          <Link to='/' className='navbar-brand'>Shelf</Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/books' className='nav-link'>Books</Link>
              </NavItem>
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
