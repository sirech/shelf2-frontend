// @flow

import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Row, Col } from 'reactstrap'

import ReactstrapSelect from './ReactstrapSelect'
import input from './input'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import type { BookForm as Book } from 'types'

const initialBook: Book = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1,
  category: 'software',
}

const categories = ['sociology', 'software', 'econ', 'history', 'other']

const bookSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'min length 5')
    .max(200, 'max length 200')
    .required('Required'),
  year: Yup.number()
    .min(2000, 'starting at 2000')
    .max(2100, 'ending at 2100')
    .required('Required'),
  stars: Yup.number()
    .min(1, 'min 1 star')
    .max(5, 'max 5 stars')
    .required('Required'),
})

const NewBookWrapper = () => (
  <Formik
    initialValues={initialBook}
    render={NewBook}
    validationSchema={bookSchema}
    onSubmit={values => console.log(values)}
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

export default NewBookWrapper
