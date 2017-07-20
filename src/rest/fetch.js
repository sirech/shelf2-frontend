import isoFetch from 'isomorphic-fetch'

const testableUrl = (path) => {
  const TESTING = process.env.NODE_ENV === 'test'
  return `${TESTING ? 'http://localhost' : ''}${path}`
}

const prepareUrl = path => testableUrl(`/rest${path}`)

const fetch = (url, opts = {}) => {
  const DEFAULT_OPTIONS = {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  const headers = {...DEFAULT_OPTIONS.headers, ...opts.headers}
  const options = {...DEFAULT_OPTIONS, ...opts, ...{ headers }}

  return isoFetch(prepareUrl(url), options)
}

export default fetch
