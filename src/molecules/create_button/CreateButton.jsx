// @flow

import React from 'react'
import { Button } from 'reactstrap'

import { FaPlus } from 'react-icons/fa'

import styles from './styles.module.css'

const CreateButton = ({ onClick }: { onClick: void => void }) => (
  <span className={styles.createButton}>
    <Button color="success" onClick={onClick}>
      <FaPlus />
      Add Book
    </Button>
  </span>
)

export default CreateButton
