import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ListGroup } from 'reactstrap'

import NavigationItem from './NavigationItem'

import yearsSelector from './selectors'

import { actions } from 'state/years'

const Navigation = () => {
  const years = useSelector(yearsSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchYears())
  }, [dispatch])

  return (
    <ListGroup tag="aside">
      {years.map((entry) => (
        <NavigationItem key={entry.year} {...entry} />
      ))}
    </ListGroup>
  )
}

export default Navigation
