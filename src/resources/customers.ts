import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'
import { OnvoCustomerT } from '../types/customer'
import { OnvoPaymentMethodT } from '../types/payment-method'

export class Customers extends ResourceBase {
  /**
   * List all customers: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers/get
   * @param queryParams - Query parameters
   * @returns Promise<Customer[]>
   */
  public async list(
    queryParams?: Record<string, string>
  ): Promise<OnvoCustomerT[]> {
    const url = buildUrl(this.client.baseUrl, '/customers', queryParams)
    return this.request<OnvoCustomerT[]>(url, { method: 'GET' })
  }

  /**
   * Create a new customer: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers/post
   * @param data - Customer data
   * @returns Promise<Customer>
   */
  public async create(data: OnvoCustomerT): Promise<OnvoCustomerT> {
    const url = buildUrl(this.client.baseUrl, '/customers')
    return this.request<OnvoCustomerT>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a customer by ID: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers~1{id}/get
   * @param id - Customer ID
   * @returns Promise<Customer>
   */
  public async get(id: string): Promise<OnvoCustomerT> {
    const url = buildUrl(this.client.baseUrl, `/customers/${id}`)
    return this.request<OnvoCustomerT>(url, { method: 'GET' })
  }

  /**
   * Update a customer by ID: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers~1{id}/post
   * @param id - Customer ID
   * @param data - Customer data
   * @returns Promise<Customer>
   */
  public async update(
    id: string,
    data: Partial<OnvoCustomerT>
  ): Promise<OnvoCustomerT> {
    const url = buildUrl(this.client.baseUrl, `/customers/${id}`)
    return this.request<OnvoCustomerT>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Delete a customer by ID: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers~1{id}/delete
   * @param id - Customer ID
   * @returns Promise<OnvoCustomerT>
   */
  public async delete(id: string): Promise<OnvoCustomerT> {
    const url = buildUrl(this.client.baseUrl, `/customers/${id}`)
    return await this.request<OnvoCustomerT>(url, { method: 'DELETE' })
  }

  /**
   * Get customer payment methods: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers~1%7Bid%7D~1payment-methods/get
   * @param id - Customer ID
   * @returns Promise<OnvoPaymentMethodT[]>
   */
  public async get_payment_methods(id: string): Promise<OnvoPaymentMethodT[]> {
    const url = buildUrl(
      this.client.baseUrl,
      `/customers/${id}/payment_methods`
    )
    return await this.request<OnvoPaymentMethodT[]>(url, { method: 'GET' })
  }
}
