// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ListGroup } from 'reactstrap'

import NavigationItem from 'molecules/navigation_item'

import yearsSelector from './selectors'

import { actionPicker } from 'state'
import { actions } from 'state/years'

type Props = {
  years: Array<{ year: number, count: number }>,
  fetchYears: () => void,
}

class Navigation extends React.Component<Props> {
  static defaultProps: Props

  componentDidMount() {
    this.props.fetchYears()
  }

  render() {
    const { years } = this.props
    return (
      <ListGroup tag="div">
        {years.map(entry => <NavigationItem key={entry.year} {...entry} />)}
      </ListGroup>
    )
  }
}

Navigation.defaultProps = {
  years: [],
  fetchYears: () => undefined,
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      years: yearsSelector,
    })(state),
  actionPicker(['fetchYears'])(actions)
)(Navigation)
