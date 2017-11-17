// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as R from 'ramda'

import booksSelector from './selectors'

import { actions } from 'state/books'
import Category from 'molecules/category'

import type { Category as CategoryType } from 'types'
type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  match: { params: { year?: string } },
  categories: Array<CategoryType>,
  fetchBooks: (string) => void
}

class BookList extends React.Component {
  static defaultProps: Props
  props: Props

  static getYear (props) {
    return R.path(['match', 'params', 'year'], props)
  }

  componentDidMount () {
    const year = BookList.getYear(this.props)

    if (year) {
      this.props.fetchBooks(year)
    }
  }

  componentWillUpdate (nextProps: Props) {
    const year = BookList.getYear(this.props)
    const newYear = BookList.getYear(nextProps)

    if (year && newYear && year !== newYear) {
      this.props.fetchBooks(newYear)
    }
  }

  render () {
    const { categories } = this.props
    return (
      <div>
        {categories.map(({name, books}) =>
          <Category key={name} name={name} books={books} />
        )}
      </div>
    )
  }
}

BookList.defaultProps = {
  match: { params: {} },
  categories: [],
  fetchBooks: (_) => undefined
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      categories: booksSelector
    })(state),
  R.pick(['fetchBooks'])(actions)
)(BookList)
