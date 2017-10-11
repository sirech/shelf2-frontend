// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import R from 'ramda'
import { Card } from 'reactstrap'

import Book from '../../molecules/book'

import booksSelector from './selectors'

import { actions } from '../../state/search'

import type { Book as BookType } from '../../types'
type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  match: { params: { keyword?: string } },
  books: Array<BookType>,
  search: (string) => void
}

class SearchList extends React.Component {
  static defaultProps: Props
  props: Props

  static getKeyword (props) {
    return R.path(['match', 'params', 'keyword'], props)
  }

  componentDidMount () {
    const keyword = SearchList.getKeyword(this.props)

    if (keyword) {
      this.props.search(keyword)
    }
  }

  componentWillUpdate (nextProps: Props) {
    const keyword = SearchList.getKeyword(this.props)
    const newKeyword = SearchList.getKeyword(nextProps)

    if (keyword && newKeyword && keyword !== newKeyword) {
      this.props.search(newKeyword)
    }
  }

  render () {
    const { books } = this.props
    return (
      <Card>
        <ul className='list-unstyled mb-0'>
          {books.map(book =>
            <li key={book.id} className='book-list-item'>
              <Book {...book} />
            </li>
          )}
        </ul>
      </Card>
    )
  }
}

SearchList.defaultProps = {
  match: { params: {} },
  books: [],
  search: (_) => undefined
}

export default connect(
  (state, props) =>
    createStructuredSelector({
      books: booksSelector
    })(state),
  R.pick(['search'])(actions)
)(SearchList)
