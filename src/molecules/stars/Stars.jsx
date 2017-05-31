// @flow

import React from 'react'
import Star from 'react-icons/lib/fa/star'
import HalfStar from 'react-icons/lib/fa/star-o'

import type { StarCount } from '../../types'

const renderStar = (isFull) => {
  const props = { size: '1.5em' }
  const Component = isFull ? Star : HalfStar

  return (
    <Component {...props} />
  )
}

const Stars = ({count, handleClick}: { count: StarCount, handleClick: number => void }) => (
  <span>
    {[...Array(5).keys()].map(i =>
      <span key={i} onClick={() => handleClick(i + 1)}>
        {renderStar(i < count)}
      </span>
     )}
  </span>
)

Stars.defaultProps = {
  count: 1,
  handleClick: e => e
}

export default Stars
