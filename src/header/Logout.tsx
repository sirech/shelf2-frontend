import React from 'react'
import { useDispatch } from 'react-redux'

import { NavItem } from 'reactstrap'

import { actions } from 'state/login'

const Logout = () => {
  const dispatch = useDispatch()

  return (
    <NavItem
      onClick={() => dispatch(actions.logout())}
      className="nav-link"
      role="link"
    >
      Logout
    </NavItem>
  )
}

export default Logout
