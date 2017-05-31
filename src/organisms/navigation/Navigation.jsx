// @flow

import React from 'react'
import { ListGroup } from 'reactstrap'

import NavigationItem from '../../molecules/navigation_item'

type Props = {
  entries: Array<{year: number, count: number}>
}

class Navigation extends React.Component {
  props: Props
  static defaultProps: Props

  render () {
    const { entries } = this.props
    return (
      <ListGroup tag='div'>
        {entries.map(entry =>
          <NavigationItem key={entry.year} {...entry} />
        )}
      </ListGroup>
    )
  }
}

Navigation.defaultProps = {
  entries: [
    { year: 2017, count: 3 },
    { year: 2016, count: 5 }
  ]
}

export default Navigation
