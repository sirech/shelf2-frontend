import React from 'react'
import { Badge, ListGroupItem } from 'reactstrap'
import { NavigateFunction, useNavigate } from 'react-router'

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
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <div
      onClick={(event) => safeNavigate(event, navigate, `/books/${year}`)}
      className="d-flex justify-content-between align-items-center"
      role="menuitem"
    >
      <ListGroupItem action tag="a">
        <span>{year}</span>
        <Badge pill color="warning" className="ml-auto">
          {count}
        </Badge>
      </ListGroupItem>
    </div>
  )
}

export default NavigationItem
