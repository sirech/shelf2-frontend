import { FieldProps } from 'formik'
import * as React from 'react'
// eslint-disable-next-line import/named
import { FormFeedback, FormGroup, Input, InputProps, Label } from 'reactstrap'
import { Categories } from 'types'

const ReactstrapSelect = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps &
  InputProps & {
    inputprops: {
      id: string
      label: string
      options: Categories[]
      defaultOption: Categories
    }
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
        {props.inputprops.options.map((option: Categories, index: number) => {
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
