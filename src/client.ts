import {
  Customers,
  PaymentIntents,
  PaymentMethods,
  Refunds,
  Checkouts,
  Prices,
  Products,
  ShippingRates,
  Subscriptions,
} from './resources/index'

export class OnvoClient {
  private api_key?: string
  public baseUrl: string = 'https://api.onvopay.com/v1'
  public customers: Customers
  public paymentMethods: PaymentMethods
  public paymentIntents: PaymentIntents
  public refunds: Refunds
  public checkouts: Checkouts
  public prices: Prices
  public products: Products
  public shippingRates: ShippingRates
  public subscriptions: Subscriptions

  constructor(options: { api_key: string }) {
    if (!options.api_key) throw new Error('Onvo API Key is required')
    this.api_key = options.api_key

    this.customers = new Customers(this)
    this.paymentMethods = new PaymentMethods(this)
    this.paymentIntents = new PaymentIntents(this)
    this.refunds = new Refunds(this)
    this.checkouts = new Checkouts(this)
    this.prices = new Prices(this)
    this.products = new Products(this)
    this.shippingRates = new ShippingRates(this)
    this.subscriptions = new Subscriptions(this)
  }

  async request<T>(url: string, config: RequestInit): Promise<T> {
    const headers = new Headers(config.headers)
    if (this.api_key) {
      headers.append('Authorization', `Bearer ${this.api_key}`)
    }

    const response = await fetch(url, { ...config, headers })

    if (!response.ok) {
      const error = await response.json()

      throw new Error(error?.message || error?.error || 'An error occurred')
    }

    const data = await response.json()
    return data as T
  }
}
