// @flow

import React from 'react'

import Category from '../../molecules/category'

import type { Category as CategoryType } from '../../types'
type Props = {
  categories: Array<CategoryType>
}

class BookList extends React.Component {
  static defaultProps: Props
  props: Props

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
  ]
}

export default BookList
