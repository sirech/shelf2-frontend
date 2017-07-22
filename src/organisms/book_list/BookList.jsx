// @flow

import React from 'react'
import { connect } from 'react-redux'

import R from 'ramda'

import { actions } from '../../state/books'
import Category from '../../molecules/category'

import type { Category as CategoryType } from '../../types'
type Props = {
  match: { params: { year?: string } },
  categories: Array<CategoryType>,
  fetchBooks: (string) => void
}

class BookList extends React.Component {
  static defaultProps: Props
  props: Props

  static getYear (props: Props) {
    return props.match.params.year
  }

  componentDidMount () {
    const year = BookList.getYear(this.props)

    if (year !== null) {
      this.props.fetchBooks(this.props.match.params.year)
    }
  }

  componentWillUpdate (nextProps) {
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
  categories: [
    { name: 'Software',
      books: [
        { id: 4, title: 'Elegant Objects', stars: 3 },
        { id: 5, title: 'Site reliability engineering', stars: 4 },
        { id: 6, title: 'The hard thing about hard things', stars: 4 }
      ]
    },
    { name: 'History',
      books: [
        { id: 8, title: 'Genghis Khan and the making of the modern world', stars: 3 }
      ]
    }
  ],
  fetchBooks: (books) => undefined
}

export default connect(
  null,
  R.pick(['fetchBooks'])(actions)
)(BookList)
