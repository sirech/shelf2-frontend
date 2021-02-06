import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Field, Form, Formik, FormikProps } from 'formik'

import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Row, Col } from 'reactstrap'

import ReactstrapSelect from './ReactstrapSelect'
import input from './input'
import Stars from './Stars'

import initialBook from './initial_book'
import bookSchema from './schema'

import { actions } from 'state/form'

import type { BookForm, Categories } from 'types'

const categories: Categories[] = [
  'sociology',
  'software',
  'econ',
  'history',
  'other',
]

const NewBookWrapper = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={initialBook}
      initialStatus={{ submitError: '' }}
      render={NewBook}
      validationSchema={bookSchema}
      onSubmit={async (values, { setStatus }) =>
        dispatch(
          actions.create(values, history, (error) =>
            setStatus({ submitError: error })
          )
        )
      }
    />
  )
}

const NewBook = ({
  status: { submitError },
  isSubmitting,
  setFieldValue,
}: FormikProps<BookForm>) => (
  <section>
    <Form>
      <Container fluid>
        <Row>
          <Col>
            {input({ name: 'title', placeholder: 'Catch-22' })}
            {input({ name: 'year', type: 'number' })}
            {input({
              name: 'description',
              type: 'textarea',
              placeholder: "That's some catch, that Catch-22",
              rows: '3',
            })}

            <Stars />

            <Field
              name="category"
              label="category"
              id="category"
              component={ReactstrapSelect}
              inputprops={{
                name: 'category',
                id: 'category',
                options: categories,
              }}
            />

            <section>
              {submitError && <div>{submitError}</div>}
              <LinkContainer to="/books">
                <Button className="float-right " color="secondary">
                  Cancel
                </Button>
              </LinkContainer>
              <Button
                className="float-right mr-2"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Create
              </Button>
            </section>
          </Col>
        </Row>
      </Container>
    </Form>
  </section>
)

export default NewBookWrapper
