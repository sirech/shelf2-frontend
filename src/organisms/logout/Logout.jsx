// @flow

import React from 'react'
import { connect } from 'react-redux'

import { NavItem } from 'reactstrap'

import authenticated from 'organisms/authenticated'

import { actionPicker } from 'state'
import { actions } from 'state/login'

type Props = {
  logout: (void) => void,
}

class Logout extends React.Component<Props> {
  handleClick: Function

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.logout()
  }

  render() {
    return (
      <NavItem>
        <div onClick={this.handleClick} className="nav-link" role="link">
          Logout
        </div>
      </NavItem>
    )
  }
}

export default authenticated()(
  connect(null, actionPicker(['logout'])(actions))(Logout)
)
