import { OnvoClient } from './client'

const TEST_EMAIL = 'test@test.com'

const client = new OnvoClient({ api_key: 'test-api'! })

test('API Should be present to initialize', () => {
  expect(() => new OnvoClient({ api_key: '' })).toThrow(
    'Onvo API Key is required'
  )
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

test('Should manage one customer', async () => {
  const data = {
    email: TEST_EMAIL,
    name: 'Test User',
  }

  expect(async () => {
    const customer = await client.customers.create(data)

    expect(customer).toBeDefined()

    const foundCustomer = await client.customers.get(customer.id)
    expect(foundCustomer).toBeDefined()

    await client.customers.delete(customer.id)
  })
})
