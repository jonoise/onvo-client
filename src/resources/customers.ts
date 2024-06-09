import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'
import { InsertOnvoCustomerI, OnvoCustomerI } from '../types/customer'
import { OnvoPaymentMethodI } from '../types/payment-method'
import { PaginatedResponse } from '../types/pagination'

export class Customers extends ResourceBase {
  /**
   * List all customers: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers/get
   * @param queryParams - Query parameters
   * @returns Promise<Customer[]>
   */
  public async list(
    queryParams?: Record<string, string>
  ): Promise<PaginatedResponse<OnvoCustomerI>> {
    const url = buildUrl(this.client.baseUrl, '/customers', queryParams)
    return this.request<PaginatedResponse<OnvoCustomerI>>(url, {
      method: 'GET',
    })
  }

  /**
   * Create a new customer: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers/post
   * @param data - Customer data
   * @returns Promise<Customer>
   */
  public async create(data: InsertOnvoCustomerI): Promise<InsertOnvoCustomerI> {
    const url = buildUrl(this.client.baseUrl, '/customers')
    return this.request<InsertOnvoCustomerI>(url, {
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
  public async get(id: string): Promise<OnvoCustomerI> {
    const url = buildUrl(this.client.baseUrl, `/customers/${id}`)
    return this.request<OnvoCustomerI>(url, { method: 'GET' })
  }

  /**
   * Update a customer by ID: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers~1{id}/post
   * @param id - Customer ID
   * @param data - Customer data
   * @returns Promise<Customer>
   */
  public async update(
    id: string,
    data: Partial<InsertOnvoCustomerI>
  ): Promise<InsertOnvoCustomerI> {
    const url = buildUrl(this.client.baseUrl, `/customers/${id}`)
    return this.request<InsertOnvoCustomerI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Delete a customer by ID: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers~1{id}/delete
   * @param id - Customer ID
   * @returns Promise<OnvoCustomerI>
   */
  public async delete(id: string): Promise<OnvoCustomerI> {
    const url = buildUrl(this.client.baseUrl, `/customers/${id}`)
    return await this.request<OnvoCustomerI>(url, { method: 'DELETE' })
  }

  /**
   * Get customer payment methods: https://docs.onvopay.com/#tag/Clientes/paths/~1v1~1customers~1%7Bid%7D~1payment-methods/get
   * @param id - Customer ID
   * @returns Promise<OnvoPaymentMethodI[]>
   */
  public async get_payment_methods(id: string): Promise<OnvoPaymentMethodI[]> {
    const url = buildUrl(
      this.client.baseUrl,
      `/customers/${id}/payment_methods`
    )
    return await this.request<OnvoPaymentMethodI[]>(url, { method: 'GET' })
  }
}
