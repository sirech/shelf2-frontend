import React from 'react'
import { Badge, ListGroupItem } from 'reactstrap'
import { NavigateFunction, useLocation, useNavigate } from 'react-router'

const safeNavigate = (
  event: React.MouseEvent<HTMLElement>,
  navigate: NavigateFunction,
  to: string
) => {
  const isModifiedEvent = () =>
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

  if (
    !event.defaultPrevented && // onClick prevented default
    event.button === 0 && // ignore right clicks
    !isModifiedEvent() // ignore clicks with modifier keys
  ) {
    event.preventDefault()

    navigate(to)
  }
}

const NavigationItem = ({ year, count }: { year: number; count: number }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const link = `/books/${year}`

  return (
    <ListGroupItem
      action
      tag="a"
      className="d-flex justify-content-between align-items-center"
      active={link === pathname}
      onClick={(event) => safeNavigate(event, navigate, link)}
    >
      <span>{year}</span>
      <Badge pill color="warning" className="ml-auto text-dark">
        {count}
      </Badge>
    </ListGroupItem>
  )
}

export default NavigationItem
