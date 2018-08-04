// @flow

import React from 'react'
import { Button } from 'reactstrap'

import { FaPlus } from 'react-icons/fa'

import './styles.css'

const CreateButton = ({ onClick }: { onClick: void => void }) => (
  <span className="create-button">
    <Button color="success" onClick={onClick}>
      <FaPlus />
      Add Book
    </Button>
  </span>
)

export default CreateButton
