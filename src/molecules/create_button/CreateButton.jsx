// @flow

import React from 'react'
import { Button } from 'reactstrap'

import PlusIcon from 'react-icons/lib/fa/plus'

import './styles.css'

const CreateButton = ({onClick}: { onClick: void => void}) => (
  <span className='create-button'>
    <Button color='success' onClick={onClick}>
      <PlusIcon />
      Add Book
    </Button>
  </span>
)

export default CreateButton
