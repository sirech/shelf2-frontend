import axios, { AxiosResponse } from 'axios'

const testableUrl = (path: string) => {
  const TESTING = process.env.NODE_ENV === 'test'
  return `${TESTING ? 'http://localhost:8989' : ''}${path}`
}

const prepareUrl = (path: string) => testableUrl(`/rest${path}`)

const addAuthorization = (headers: Record<string, string>) => {
  const token = localStorage.getItem('authToken')

  if (token) {
    headers.Authorization = `Bearer: ${token}`
  }
}

const fetch = <T>(
  url: string,
  opts: Record<string, unknown> & { headers?: Record<string, unknown> } = {}
): Promise<AxiosResponse<T>> => {
  const DEFAULT_OPTIONS = {
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  }

  const headers = { ...DEFAULT_OPTIONS.headers, ...opts.headers }
  addAuthorization(headers)
  const options = { ...DEFAULT_OPTIONS, ...opts, ...{ headers } }

  return axios(prepareUrl(url), options)
}

export default fetch
