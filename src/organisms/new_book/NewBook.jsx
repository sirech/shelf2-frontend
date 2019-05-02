// @flow

import React from 'react'

import { Button, Container, Row, Col } from 'reactstrap'
import ReactstrapInput from './ReactstrapInput'
import ReactstrapSelect from './ReactstrapSelect'
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
            <Field
              name="title"
              label="title"
              id="title"
              component={ReactstrapInput}
              placeholder="Catch-22"
            />

            <Field
              type="number"
              name="year"
              label="year"
              id="year"
              component={ReactstrapInput}
            />

            <Field
              type="textarea"
              name="description"
              label="description"
              id="description"
              component={ReactstrapInput}
              placeholder="That's some catch, that Catch-22"
              rows="3"
            />

            <Field
              type="number"
              name="stars"
              label="stars"
              id="stars"
              component={ReactstrapInput}
            />

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

            <Button className="float-right " color="secondary">
              Cancel
            </Button>

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
