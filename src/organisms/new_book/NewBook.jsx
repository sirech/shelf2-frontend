// @flow

import React from 'react'
import { connect } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Row, Col } from 'reactstrap'

import ReactstrapSelect from './ReactstrapSelect'
import input from './input'
import { Field, Form, Formik } from 'formik'

import initialBook from './initial_book'
import bookSchema from './schema'

import { actionPicker } from 'state'
import { actions } from 'state/form'

import type { Categories, BookForm as BookFormType } from 'types'
type Props = {
  create: BookFormType => void,
}

const categories: Array<Categories> = [
  'sociology',
  'software',
  'econ',
  'history',
  'other',
]

const NewBookWrapper = (props: Props) => (
  <Formik
    initialValues={initialBook}
    render={NewBook}
    validationSchema={bookSchema}
    onSubmit={values => props.create(values)}
  />
)

const NewBook = isSubmitting => (
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
            {input({ name: 'stars', type: 'number' })}

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

            <LinkContainer to="/books">
              <Button className="float-right " color="secondary">
                Cancel
              </Button>
            </LinkContainer>

            <Button
              className="float-right mr-2"
              color="primary"
              type="submit"
              disabled={!isSubmitting}
            >
              Create
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  </section>
)

NewBookWrapper.defaultProps = {
  create: _ => undefined,
}

export default connect(
  null,
  actionPicker(['create'])(actions)
)(NewBookWrapper)