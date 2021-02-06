import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card, CardHeader } from 'reactstrap'
import debounce from 'lodash.debounce'

import SimpleBookList from 'components/simple_book_list'

import booksSelector from './selectors'

import { actions } from 'state/search'

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  match: { params: { keyword?: string } }
}

const SearchList = ({
  match: {
    params: { keyword },
  },
}: Props) => {
  const books = useSelector(booksSelector)
  const dispatch = useDispatch()
  const debouncedSearch = debounce(actions.search, 300)

  useEffect(() => {
    if (keyword) {
      dispatch(debouncedSearch(keyword))
    }
  }, [keyword, dispatch, debouncedSearch])

  return (
    <Card className="ml-3 mr-3">
      <CardHeader className="text-right">{books.length} results</CardHeader>
      <SimpleBookList books={books} />
    </Card>
  )
}

export default SearchList
