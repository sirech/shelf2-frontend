// @flow

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import booksSelector from './selectors'

import { actions } from 'state/books'
import Category from 'molecules/category'

type Props = {
  match: { params: { year?: string } },
}

const BookList = ({
  match: {
    params: { year },
  },
}: Props) => {
  const categories = useSelector(booksSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (year) {
      dispatch(actions.fetchBooks(year))
    }
  }, [year, dispatch])

  return (
    <div>
      {categories.map(({ name, books }) => (
        <Category key={name} name={name} books={books} />
      ))}
    </div>
  )
}

export default BookList
