// @flow

import React from 'react'
import { Field } from 'formik'

import { FormGroup, Label } from 'reactstrap'

import StarBlock from 'components/stars'

const fieldName = 'stars'

const Stars = () => (
  <Field name={fieldName} id={fieldName} type="number">
    {({ field: { value }, form: { setFieldValue } }) => (
      <FormGroup>
        <Label for={fieldName} className="label-color">
          {fieldName}
        </Label>
        <div>
          <StarBlock
            count={value}
            handleClick={(number) => setFieldValue(fieldName, number)}
          />
        </div>
      </FormGroup>
    )}
  </Field>
)

export default Stars
