import axios from 'axios'
import { TextEncoder, TextDecoder } from 'node:util'
import { afterEach, beforeEach, expect, vi } from 'vitest'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

console.error = vi.fn()

const spies = {
  get: vi.spyOn(axios, 'get'),
  patch: vi.spyOn(axios, 'patch'),
  post: vi.spyOn(axios, 'post'),
}

beforeEach(() => {
  vi.resetAllMocks()
})

afterEach(() => {
  expect(spies.get).not.toHaveBeenCalled()
  expect(spies.patch).not.toHaveBeenCalled()
  expect(spies.post).not.toHaveBeenCalled()

  expect(console.error).not.toHaveBeenCalled()
})
