import React from 'react'
import { Badge, ListGroupItem } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavigationItem = ({ year, count }: { year: number; count: number }) => (
  <LinkContainer
    to={`/books/${year}`}
    className="d-flex justify-content-between align-items-center"
  >
    <ListGroupItem action tag="a">
      <span>{year}</span>
      <Badge pill color="warning" className="ml-auto">
        {count}
      </Badge>
    </ListGroupItem>
  </LinkContainer>
)

export default NavigationItem
