import React from 'react'
import { Field, FieldProps } from 'formik'

import { FormGroup, Label } from 'reactstrap'

import StarBlock from 'components/stars'
import { StarCount } from 'types'

const fieldName = 'stars'

const Stars = () => (
  <Field name={fieldName} id={fieldName} type="number">
    {({ field: { value }, form: { setFieldValue } }: FieldProps<StarCount>) => {
      const handleClick = (number: number) => setFieldValue(fieldName, number)

      return (
        <FormGroup>
          <Label for={fieldName} className="label-color">
            {fieldName}
          </Label>
          <div>
            <StarBlock count={value} handleClick={void handleClick} />
          </div>
        </FormGroup>
      )
    }}
  </Field>
)

export default Stars
