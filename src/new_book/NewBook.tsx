import React from 'react'
import { useHistory } from 'react-router-dom'
import { Field, Form, Formik, FormikProps } from 'formik'

import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Row, Col } from 'reactstrap'

import ReactstrapSelect from './ReactstrapSelect'
import input from './input'
import Stars from './Stars'

import initialBook from './initial_book'
import bookSchema from './schema'

import { useAppDispatch } from 'hooks'
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
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={initialBook}
      initialStatus={{ submitError: '' }}
      validationSchema={bookSchema}
      // eslint-disable-next-line @typescript-eslint/require-await
      onSubmit={async (values, { setStatus }) =>
        dispatch(
          actions.create(values, history, (error) =>
            setStatus({ submitError: error })
          )
        )
      }
    >
      {(props) => <NewBook {...props}></NewBook>}
    </Formik>
  )
}

const NewBook = ({
  status: { submitError },
  isSubmitting,
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
