import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card, CardHeader } from 'reactstrap'
import debounce from 'lodash.debounce'

import booksSelector from './selectors'
import SimpleBookList from 'components/simple_book_list'

import { actions } from 'state/search'

type Props = {
  match: { params: { keyword?: string } }
}

const SearchList = ({
  match: {
    params: { keyword },
  },
}: Props) => {
  const books = useSelector(booksSelector)
  const dispatch = useDispatch()
  const debouncedSearch = debounce(dispatch, 300)

  useEffect(() => {
    if (keyword) {
      debouncedSearch(actions.search(keyword))
    }
  }, [keyword, debouncedSearch])

  return (
    <Card className="ml-3 mr-3">
      <CardHeader className="text-right">{books.length} results</CardHeader>
      <SimpleBookList books={books} />
    </Card>
  )
}

export default SearchList
