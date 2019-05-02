// @flow

import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Button, Container, Row, Col } from 'reactstrap'

import ReactstrapSelect from './ReactstrapSelect'
import input from './input'
import { Field, Form, Formik } from 'formik'

import type { BookForm as Book } from 'types'

const initialBook: Book = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1,
  category: 'software',
}

const categories = ['sociology', 'software', 'econ', 'history', 'other']

const NewBookWrapper = () => (
  <Formik
    initialValues={initialBook}
    render={NewBook}
    onSubmit={values => console.log(values)}
  />
)

const NewBook = () => (
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

            <Button className="float-right mr-2" color="primary">
              Create
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  </section>
)

export default NewBookWrapper
