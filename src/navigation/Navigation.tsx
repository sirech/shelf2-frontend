import React, { useEffect } from 'react'

import { ListGroup } from 'reactstrap'

import NavigationItem from './NavigationItem'

import yearsSelector from './selectors'
import { useAppDispatch, useAppSelector } from 'hooks'

import { actions } from 'state/years'

const Navigation = () => {
  const years = useAppSelector(yearsSelector)
  const dispatch = useAppDispatch()
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
