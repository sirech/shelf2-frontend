// @flow

import React from 'react'
import Star from '../star'

import './styles.css'

import type { StarCount } from '../../types'

const Stars = ({count, handleClick}: { count: StarCount, handleClick: number => void }) => (
  <span className='stars'>
    {[...Array(5).keys()].map(i =>
      <Star key={i} isFull={i < count} onClick={() => handleClick(i + 1)} />
     )}
  </span>
)

Stars.defaultProps = {
  count: 1,
  handleClick: e => e
}

export default Stars