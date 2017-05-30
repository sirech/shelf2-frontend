import React from 'react'
import { ListGroup } from 'reactstrap'

import NavigationItem from '../../molecules/navigation_item'

class Navigation extends React.Component {
  render () {
    const { activeYear, entries } = this.props
    return (
      <ListGroup>
        {entries.map(entry =>
          <NavigationItem key={entry.year} activeYear={activeYear} {...entry} />
        )}
      </ListGroup>
    )
  }
}

Navigation.defaultProps = {
  activeYear: 2017,
  entries: [
    { year: 2017, count: 3 },
    { year: 2016, count: 5 }
  ]
}

export default Navigation
