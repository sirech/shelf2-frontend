// @flow

import React from 'react'
import { connect } from 'react-redux'

import * as R from 'ramda'
import { NavItem } from 'reactstrap'

import authenticated from '../../organisms/authenticated'
import { actions } from '../../state/login'

type Props = {
  logout: void => void
}

class Logout extends React.Component {
  props: Props
  onClick: Function

  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.logout()
  }

  render () {
    return (
      <NavItem>
        <div onClick={this.onClick} className='nav-link' role='link'>Logout</div>
      </NavItem>
    )
  }
}

export default authenticated()(connect(
  null,
  R.pick(['logout'])(actions)
)(Logout))
