// @flow

import React from 'react'
import StarIcon from 'react-icons/lib/fa/star'
import HalfStarIcon from 'react-icons/lib/fa/star-o'

import './styles.css'

const renderStar = (isFull) => {
  const props = { size: '1.5em' }
  const Component = isFull ? StarIcon : HalfStarIcon

  return (
    <Component {...props} />
  )
}

const Star = ({isFull, onClick}: { isFull: boolean, onClick?: void => void}) => (
  <span className='star' onClick={onClick}>
    {renderStar(isFull)}
  </span>
)

export default Star
