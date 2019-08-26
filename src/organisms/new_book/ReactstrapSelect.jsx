// @flow

import * as React from 'react'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'

const ReactstrapSelect = ({
  field,
  form: { isSubmitting, touched, errors },
  disabled = false,
  ...props
}: {
  field: Object,
  form: Object,
  disabled: boolean,
  label: string,
  inputprops: Object,
}) => {
  const error = errors[field.name]
  const touch = touched[field.name]
  return (
    <FormGroup>
      <Label for={props.inputprops.id} className="label-color">
        {props.label}
      </Label>
      <Input
        id={props.inputprops.id}
        {...field}
        {...props}
        type="select"
        invalid={Boolean(touched[field.name] && errors[field.name])}
        placeholder="Test"
      >
        <option value="">{props.inputprops.defaultOption}</option>
        {props.inputprops.options.map((option, index) => {
          if (option.name)
            return (
              <option value={option.id} key={index}>
                {option.name}
              </option>
            )
          return (
            <option value={option} key={index}>
              {option}
            </option>
          )
        })}
      </Input>
      {touch && error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  )
}

export default ReactstrapSelect
