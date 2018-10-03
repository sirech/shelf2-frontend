// @flow

import React from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

import styles from './styles.module.css'

const renderStar = isFull => {
  const props = { size: '1.5em' }
  const Component = isFull ? IoIosStar : IoIosStarOutline

  return <Component {...props} />
}

const Star = ({
  isFull,
  onClick,
}: {
  isFull: boolean,
  onClick?: void => void,
}) => (
  <span className={styles.star} onClick={onClick}>
    {renderStar(isFull)}
  </span>
)

export default Star
