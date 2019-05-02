// @flow

import React from 'react'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'

const ReactstrapInput = ({
  field: { ...fields },
  form: { touched, errors, ...rest },
  ...props
}: {
  field: Object,
  form: Object,
  id: string,
  label: string,
}) => (
  <FormGroup>
    <Label for={props.id} className={'label-color'}>
      {props.label}
    </Label>
    <Input
      {...props}
      {...fields}
      invalid={Boolean(touched[fields.name] && errors[fields.name])}
    />
    {touched[fields.name] && errors[fields.name] ? (
      <FormFeedback>{errors[fields.name]}</FormFeedback>
    ) : (
      ''
    )}
  </FormGroup>
)
export default ReactstrapInput
