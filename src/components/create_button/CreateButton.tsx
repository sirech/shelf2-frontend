// @flow

import React from 'react'
import { Button } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'

const CreateButton = ({ onClick }: { onClick: () => void }) => (
  <span className={styles.createButton}>
    <Button color="success" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
      Add Book
    </Button>
  </span>
)

export default CreateButton
