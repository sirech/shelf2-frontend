import React, { useEffect, useMemo } from 'react'

import { Card, CardHeader } from 'reactstrap'
import debounce from 'lodash.debounce'

import { bindActionCreators } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import booksSelector from './selectors'

import { useAppDispatch, useAppSelector } from 'hooks'
import SimpleBookList from 'components/simple_book_list'

import { actions } from 'state/search'

const SearchList = () => {
  const { keyword } = useParams<string>()
  const books = useAppSelector(booksSelector)
  const dispatch = useAppDispatch()

  const boundDispatch = useMemo(
    () => bindActionCreators(actions, dispatch),
    [dispatch]
  )
  const debouncedSearch = useMemo(
    () => debounce(boundDispatch.search, 300),
    [boundDispatch]
  )

  useEffect(() => {
    if (keyword) {
      debouncedSearch(keyword)
    }
  }, [keyword, debouncedSearch])

  return (
    <Card className="mx-3">
      <CardHeader className="text-right">{books.length} results</CardHeader>
      <SimpleBookList books={books} />
    </Card>
  )
}

export default SearchList
