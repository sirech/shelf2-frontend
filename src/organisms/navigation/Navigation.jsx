import React from 'react'
import { ListGroup } from 'reactstrap'

import NavigationItem from '../../molecules/navigation_item'

class Navigation extends React.Component {
  render () {
    const { entries } = this.props
    return (
      <ListGroup>
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
