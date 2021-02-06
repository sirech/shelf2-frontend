import React from 'react'

import ReactstrapInput from './ReactstrapInput'
import { Field } from 'formik'

const input = ({
  name,
  ...props
}: {
  name: string
  placeholder?: string
  type?: string
  rows?: string
}) => {
  const allProps = {
    name,
    label: name,
    id: name,
    component: ReactstrapInput,
    ...props,
  }
  return <Field {...allProps} />
}

export default input
