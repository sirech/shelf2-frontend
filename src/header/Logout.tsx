import React from 'react'

import { NavItem } from 'reactstrap'
import { useAppDispatch } from 'hooks'

import { actions } from 'state/login'

const Logout = () => {
  const dispatch = useAppDispatch()

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
