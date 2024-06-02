import {
  Customers,
  PaymentIntents,
  PaymentMethods,
  Refunds,
} from './resources/index'

export class OnvoClient {
  private api_key?: string
  public baseUrl: string = 'https://api.onvopay.com/v1'
  public customers: Customers
  public paymentMethods: PaymentMethods
  public paymentIntents: PaymentIntents
  public refunds: Refunds

  constructor(options: { api_key: string }) {
    if (!options.api_key) throw new Error('API Key is required')
    this.api_key = options.api_key

    this.customers = new Customers(this)
    this.paymentMethods = new PaymentMethods(this)
    this.paymentIntents = new PaymentIntents(this)
    this.refunds = new Refunds(this)
  }

  async request<T>(url: string, config: RequestInit): Promise<T> {
    const headers = new Headers(config.headers)
    if (this.api_key) {
      headers.append('Authorization', `Bearer ${this.api_key}`)
    }

    const response = await fetch(url, { ...config, headers })

    if (!response.ok) {
      console.log('response', await response.json())
      throw new Error(`HTTP error ${response.status}`)
    }

    const data = await response.json()
    return data as T
  }
}
