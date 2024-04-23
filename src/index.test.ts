import { OnvoClient } from './client'

const TEST_API_KEY = 'api_key'

const client = new OnvoClient(TEST_API_KEY)

test('Init Onvo', () => {
  expect(() => new OnvoClient('')).toThrow('API Key is required')
})

test('Should have required headers', () => {
  const defaultHeaders = new Map<string, string>([
    ['Content-Type', 'application/json'],
    ['Accept', 'application/json'],
    ['Authorization', `Bearer ${TEST_API_KEY}`],
  ])

  expect(client['_headers']).toEqual(defaultHeaders)
})
