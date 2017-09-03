// @flow

import isoFetch from 'isomorphic-fetch'

const testableUrl = (path: string) => {
  const TESTING = process.env.NODE_ENV === 'test'
  return `${TESTING ? 'http://localhost' : ''}${path}`
}

const prepareUrl = path => testableUrl(`/rest${path}`)

const addAuthorization = (headers) => {
  const token = localStorage.getItem('authToken')

  if (token) {
    headers['Authorization'] = `Bearer: ${token}`
  }
}

const fetch = (url: string, opts: Object = {}) => {
  const DEFAULT_OPTIONS = {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  const headers = {...DEFAULT_OPTIONS.headers, ...opts.headers}
  addAuthorization(headers)
  const options = {...DEFAULT_OPTIONS, ...opts, ...{ headers }}

  return isoFetch(prepareUrl(url), options)
}

export default fetch
