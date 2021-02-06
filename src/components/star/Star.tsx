import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.css'

const renderStar = (isFull: boolean) => {
  const icon = isFull ? faStar : regularStar
  return <FontAwesomeIcon icon={icon} size="lg" />
}

const Star = ({
  isFull,
  onClick,
}: {
  isFull: boolean
  onClick?: () => void
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  <span className={styles.star} onClick={onClick}>
    {renderStar(isFull)}
  </span>
)

export default Star
