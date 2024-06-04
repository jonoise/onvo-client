import { OnvoPaginationParams, PaginatedResponse } from '../types/pagination'
import { InsertOnvoPriceI, OnvoPriceI } from '../types/price'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class Prices extends ResourceBase {
  /**
   * List all prices: https://docs.onvopay.com/#tag/Precios/paths/~1v1~1prices/get
   * @param queryParams - Query parameters
   * @returns Promise<OnvoPrice[]>
   */
  public async list(
    queryParams?: OnvoPaginationParams
  ): Promise<PaginatedResponse<OnvoPriceI>> {
    const url = buildUrl(
      this.client.baseUrl,
      '/prices',
      queryParams as Record<string, string>
    )
    return this.request<PaginatedResponse<OnvoPriceI>>(url, { method: 'GET' })
  }

  /**
   * Create a new price: https://docs.onvopay.com/#tag/Precios/paths/~1v1~1prices/post
   * @param data - Price data
   * @returns Promise<OnvoPriceI>
   */
  public async create(data: InsertOnvoPriceI): Promise<OnvoPriceI> {
    const url = buildUrl(this.client.baseUrl, '/prices')
    return this.request<OnvoPriceI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a price by ID: https://docs.onvopay.com/#tag/Precios/paths/~1v1~1prices~1%7Bid%7D/get
   * @param id - Price ID
   * @returns Promise<OnvoPriceI>
   */
  public async get(id: string): Promise<OnvoPriceI> {
    const url = buildUrl(this.client.baseUrl, `/prices/${id}`)
    return this.request<OnvoPriceI>(url, { method: 'GET' })
  }

  /**
   * Update a price: https://docs.onvopay.com/#tag/Precios/paths/~1v1~1prices~1%7Bid%7D/post
   * @param id - Price ID
   * @param data - Price data
   * @returns Promise<OnvoPriceI>
   */

  public async update(id: string, data: InsertOnvoPriceI): Promise<OnvoPriceI> {
    const url = buildUrl(this.client.baseUrl, `/prices/${id}`)
    return this.request<OnvoPriceI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Delete a price: https://docs.onvopay.com/#tag/Precios/paths/~1v1~1prices~1%7Bid%7D/delete
   * @param id - Price ID
   * @returns Promise<OnvoPriceI>
   */
  public async delete(id: string): Promise<OnvoPriceI> {
    const url = buildUrl(this.client.baseUrl, `/prices/${id}`)
    return this.request<OnvoPriceI>(url, { method: 'DELETE' })
  }
}
