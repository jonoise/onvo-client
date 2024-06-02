import { OnvoClient } from './client'

const TEST_API_KEY = process.env['TEST_API_KEY']
const client = new OnvoClient({ api_key: TEST_API_KEY! })

test('API Should be present to initialize', () => {
  expect(() => new OnvoClient({ api_key: '' })).toThrow('API Key is required')
})

test('Instance of OnvoClient should be created', () => {
  expect(client).toBeInstanceOf(OnvoClient)
})

test('Instance of OnvoClient should have a customers property', () => {
  expect(client.customers).toBeDefined()
})

test('Instance of OnvoClient should have a baseUrl property', () => {
  expect(client.baseUrl).toBe('https://api.onvopay.com/v1')
})

test('Should create customer', async () => {
  const data = {
    email: 'amigo@gmail.com ',
    name: 'amigo uno',
  }

  expect(async () => {
    const customer = await client.customers.create(data)
    console.log('customer', customer)
    expect(customer).toBeDefined()
  })
})
