import axios from 'axios'
import { TextEncoder, TextDecoder } from "node:util"

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

console.error = jest.fn()

const spies = {
  get: jest.spyOn(axios, 'get'),
  patch: jest.spyOn(axios, 'patch'),
  post: jest.spyOn(axios, 'post'),
}

beforeEach(() => {
  jest.resetAllMocks()
})

afterEach(() => {
  expect(spies.get).not.toHaveBeenCalled()
  expect(spies.patch).not.toHaveBeenCalled()
  expect(spies.post).not.toHaveBeenCalled()

  expect(console.error).not.toHaveBeenCalled()
})
