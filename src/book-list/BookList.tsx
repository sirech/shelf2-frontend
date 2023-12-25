import React, { useEffect } from 'react'

import booksSelector from './selectors'

import { useAppDispatch, useAppSelector } from 'hooks'
import { actions } from 'state/books'
import Category from 'components/category'

type Props = {
  match: { params: { year?: string } }
}

const BookList = ({
  match: {
    params: { year },
  },
}: Props) => {
  const categories = useAppSelector(booksSelector)
  const dispatch = useAppDispatch()

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
