// @flow

import React from 'react'
import { useDispatch } from 'react-redux'

import { NavItem } from 'reactstrap'

import { actions } from 'state/login'

const Logout = () => {
  const dispatch = useDispatch()

  return (
    <NavItem>
      <div
        onClick={() => dispatch(actions.logout())}
        className="nav-link"
        role="link"
      >
        Logout
      </div>
    </NavItem>
  )
}

export default Logout
