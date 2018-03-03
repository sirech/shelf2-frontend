// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as R from 'ramda'
import { Card, CardHeader } from 'reactstrap'
import debounce from 'lodash.debounce'
import Pluralize from 'react-pluralize'

import SimpleBookList from 'molecules/simple_book_list'

import booksSelector from './selectors'

import { actionPicker } from 'state'
import { actions } from 'state/search'

import type { Book as BookType } from 'types'
type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  match: { params: { keyword?: string } },
  books: Array<BookType>,
  search: (string) => void
}

class SearchList extends React.Component<Props> {
  static defaultProps: Props
  debouncedSearch: (string) => void

  static getKeyword (props) {
    return R.path(['match', 'params', 'keyword'], props)
  }

  componentDidMount () {
    this.debouncedSearch = debounce(this.props.search, 300)

    const keyword = SearchList.getKeyword(this.props)

    if (keyword) {
      this.debouncedSearch(keyword)
    }
  }

  componentWillUpdate (nextProps: Props) {
    const keyword = SearchList.getKeyword(this.props)
    const newKeyword = SearchList.getKeyword(nextProps)

    if (keyword && newKeyword && keyword !== newKeyword) {
      this.debouncedSearch(newKeyword)
    }
  }

  render () {
    const { books } = this.props
    return (
      <Card>
        <CardHeader className='text-right'>
          <Pluralize singular='result' count={books.length} />
        </CardHeader>
        <SimpleBookList books={books} />
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
  actionPicker(['search'])(actions)
)(SearchList)
