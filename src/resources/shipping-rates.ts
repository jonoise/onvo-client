import { OnvoPaginationParams } from '../types/pagination'
import {
  InsertOnvoShippingRateI,
  OnvoShippingRateI,
} from '../types/shipping-rates'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class ShippingRates extends ResourceBase {
  /**
   * List all shipping rates: https://docs.onvopay.com/#tag/Tarifas-de-envio/paths/~1v1~1shipping-rates/get
   * @param queryParams - Query parameters
   * @returns Promise<ShippingRate[]>
   */
  public async list(
    queryParams?: OnvoPaginationParams
  ): Promise<OnvoShippingRateI[]> {
    const url = buildUrl(
      this.client.baseUrl,
      '/shipping-rates',
      queryParams as Record<string, string>
    )
    return this.request<OnvoShippingRateI[]>(url, { method: 'GET' })
  }

  /**
   * Create a new shipping rate: https://docs.onvopay.com/#tag/Tarifas-de-envio/paths/~1v1~1shipping-rates/post
   * @param data - Shipping rate data
   * @returns Promise<OnvoShippingRateI>
   */
  public async create(
    data: InsertOnvoShippingRateI
  ): Promise<OnvoShippingRateI> {
    const url = buildUrl(this.client.baseUrl, '/shipping-rates')
    return this.request<OnvoShippingRateI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a shipping rate by ID: https://docs.onvopay.com/#tag/Tarifas-de-envio/paths/~1v1~1shipping-rates~1%7Bid%7D/get
   * @param id - Shipping rate ID
   * @returns Promise<OnvoShippingRateI>
   */

  public async get(id: string): Promise<OnvoShippingRateI> {
    const url = buildUrl(this.client.baseUrl, `/shipping-rates/${id}`)
    return this.request<OnvoShippingRateI>(url, { method: 'GET' })
  }

  /**
   * Update a shipping rate: https://docs.onvopay.com/#tag/Tarifas-de-envio/paths/~1v1~1shipping-rates~1%7Bid%7D/post
   * @param id - Shipping rate ID
   * @param data - Shipping rate data
   * @returns Promise<OnvoShippingRateI>
   */

  public async update(
    id: string,
    data: InsertOnvoShippingRateI
  ): Promise<OnvoShippingRateI> {
    const url = buildUrl(this.client.baseUrl, `/shipping-rates/${id}`)
    return this.request<OnvoShippingRateI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Delete a shipping rate: https://docs.onvopay.com/#tag/Tarifas-de-envio/paths/~1v1~1shipping-rates~1%7Bid%7D/delete
   * @param id - Shipping rate ID
   * @returns Promise<OnvoShippingRateI>
   */

  public async delete(id: string): Promise<OnvoShippingRateI> {
    const url = buildUrl(this.client.baseUrl, `/shipping-rates/${id}`)
    return this.request<OnvoShippingRateI>(url, { method: 'DELETE' })
  }
}
