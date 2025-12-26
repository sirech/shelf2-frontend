/**
 * @vitest-environment node
 */
import * as R from 'ramda'
import { Matchers } from '@pact-foundation/pact'
import { vi } from 'vitest'

import { fetchBooks } from './books/slice'
import { create } from './form/actions'
import { search } from './search/slice'
import { fetchYears } from './years/slice'

import { books, years, rest } from './__fixtures__'
import { createProvider } from 'test'

import axios from 'axios'
import http from 'node:http'
import https from 'node:https'

// Pact tests can be slower due to mock server start/stop and verification.
vi.setConfig({ testTimeout: 5 * 60 * 1000 })

describe('pacts', () => {
  let dispatch

  beforeEach(() => {
    dispatch = vi.fn()
    axios.defaults.httpAgent = new http.Agent({ keepAlive: false })
    axios.defaults.httpsAgent = new https.Agent({ keepAlive: false })
  })

  const provider = createProvider()

  describe('books - fetchBooks', () => {
    const year = '2016'

    it('should dispatch the correct actions', async () => {
      await provider
        .addInteraction()
        .given('i have some books')
        .uponReceiving('a request for a list of books for a given year')
        .withRequest('GET', '/rest/books', (builder) => {
          builder.query({ year })
          builder.headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          })
        })
        .willRespondWith(200, (builder) => {
          builder.headers({ 'Content-Type': 'application/json; charset=utf-8' })
          builder.jsonBody(rest.books)
        })
        .executeTest(async (mockserver) => {
          const expectedActions = [
            {
              type: 'books/receivedBooks',
              payload: R.pick(['entities', 'result'])(books()),
            },
            { type: 'books/activeYearMarked', payload: 2016 },
          ]

          const result = await fetchBooks(year)(dispatch)
          expect(dispatch.mock.calls.flat()).toEqual(expectedActions)
          return result
        })
    })
  })

  describe('forms - change', () => {
    const bookForm = R.omit(['id'])(rest.book)
    const navigate = vi.fn()
    const errorCallback = vi.fn()

    it('should dispatch the correct actions', async () => {
      await provider
        .addInteraction()
        .given('i am logged in')
        .uponReceiving('a request to create a new book')
        .withRequest('POST', '/rest/books', (builder) => {
          builder.headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${rest.authToken}`,
          })
          builder.jsonBody({ book: bookForm })
        })
        .willRespondWith(201, (builder) => {
          builder.headers({ 'Content-Type': 'application/json; charset=utf-8' })
          builder.jsonBody(Matchers.like(rest.book))
        })
        .executeTest(async () => {
          const expectedActions = [
            { type: 'books:book:create:success', payload: rest.book },
          ]

          await create(
            bookForm,
            navigate,
            rest.authToken,
            errorCallback
          )(dispatch)
          expect(dispatch.mock.calls.flat()).toEqual(expectedActions)
          expect(navigate).toHaveBeenCalledWith('/books')
        })
    })
  })

  describe('forms - errors', () => {
    const bookForm = R.omit(['id'])(rest.book)
    const navigate = vi.fn()
    const errorCallback = vi.fn()

    it('should dispatch the correct actions', async () => {
      await provider
        .addInteraction()
        .given('i have an expired token')
        .uponReceiving('a request to create a new book')
        .withRequest('POST', '/rest/books', (builder) => {
          builder.headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: 'Bearer EXPIRED',
          })
          builder.jsonBody({ book: bookForm })
        })
        .willRespondWith(401)
        .executeTest(async () => {
          const expectedActions = [
            { type: 'books:book:create:fail', payload: '' },
          ]

          await create(bookForm, navigate, 'EXPIRED', errorCallback)(dispatch)
          expect(dispatch.mock.calls.flat()).toEqual(expectedActions)
          expect(navigate).not.toHaveBeenCalled()
          expect(errorCallback).toHaveBeenCalled()
        })
    })
  })

  describe('search - search', () => {
    const keyword = 'a'

    it('should dispatch the correct actions', async () => {
      await provider
        .addInteraction()
        .given('i have some books')
        .uponReceiving('a search request')
        .withRequest('GET', `/rest/books/search/${keyword}`, (builder) => {
          builder.headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          })
        })
        .willRespondWith(200, (builder) => {
          builder.headers({ 'Content-Type': 'application/json; charset=utf-8' })
          builder.jsonBody(rest.books)
        })
        .executeTest(async () => {
          const expectedActions = [
            {
              type: 'search/receivedSearchResult',
              payload: R.pick(['entities', 'result'])(books()),
            },
          ]

          await search(keyword)(dispatch)
          expect(dispatch.mock.calls.flat()).toEqual(expectedActions)
        })
    })
  })

  describe('years - fetchYears', () => {
    it('should dispatch the correct actions', async () => {
      await provider
        .addInteraction()
        .given('i have books for different years')
        .uponReceiving('a request for a summary of all the years')
        .withRequest('GET', '/rest/books/years', (builder) => {
          builder.headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          })
        })
        .willRespondWith(200, (builder) => {
          builder.headers({ 'Content-Type': 'application/json; charset=utf-8' })
          builder.jsonBody(rest.years)
        })
        .executeTest(async () => {
          const expectedActions = [
            { type: 'years/receivedYears', payload: years() },
          ]

          await fetchYears()(dispatch)
          expect(dispatch.mock.calls.flat()).toEqual(expectedActions)
        })
    })
  })
})
