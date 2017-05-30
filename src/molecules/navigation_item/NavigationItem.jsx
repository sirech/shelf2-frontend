import React from 'react'
import { Badge, ListGroupItem } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import R from 'ramda'

const NavigationItem = ({activeYear, year, count}) => (
  <LinkContainer to={`/books/${year}`} >
    <ListGroupItem active={R.equals(activeYear, year)}>
      <span>{year}</span >
      <Badge pill color='warning' className='ml-auto'>{count}</Badge>
    </ListGroupItem>
  </LinkContainer>
)

export default NavigationItem
