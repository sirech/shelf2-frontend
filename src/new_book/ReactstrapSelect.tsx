import { FieldProps } from 'formik'
import * as React from 'react'
import { FormFeedback, FormGroup, Input, InputProps, Label } from 'reactstrap'

const ReactstrapSelect = ({
  field,
  form: { touched, errors },
  disabled = false,
  ...props
}: FieldProps & InputProps) => {
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
        {props.inputprops.options.map((option: string, index: string) => {
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
