import React from 'react'
import Star from 'components/star'

import * as R from 'ramda'

import styles from './styles.module.css'

import type { StarCount } from 'types'

const Stars = ({
  count,
  handleClick = R.identity,
}: {
  count: StarCount
  handleClick?: (count: number) => void
}) => (
  <span className={styles.stars}>
    {[...Array(5).keys()].map((i) => (
      <Star key={i} isFull={i < count} onClick={() => handleClick(i + 1)} />
    ))}
  </span>
)

export default Stars
