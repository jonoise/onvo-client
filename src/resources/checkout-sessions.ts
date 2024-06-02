import {
  InsertOnvoCheckoutSessionI,
  OnvoCheckoutSessionI,
} from '../types/checkout'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class Checkouts extends ResourceBase {
  /**
   * Create a new checkout: https://docs.onvopay.com/#tag/Checkouts/paths/~1v1~1checkouts/post
   * @param data - Checkout data
   * @returns Promise<OnvoCheckoutI>
   */

  public async create(
    data: InsertOnvoCheckoutSessionI
  ): Promise<OnvoCheckoutSessionI> {
    const url = buildUrl(this.client.baseUrl, '/checkouts/sessions')
    return this.request<OnvoCheckoutSessionI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Expire a checkout: https://docs.onvopay.com/#tag/Checkouts/paths/~1v1~1checkouts~1{id}~1expire/post
   * @param id - Checkout ID
   * @returns Promise<OnvoCheckoutI>
   */

  public async expire(id: string): Promise<OnvoCheckoutSessionI> {
    const url = buildUrl(
      this.client.baseUrl,
      `/checkouts/sessions/${id}/expire`
    )
    return this.request<OnvoCheckoutSessionI>(url, { method: 'POST' })
  }

  /**
   * Get a checkout by ID: https://docs.onvopay.com/#tag/Checkouts/paths/~1v1~1checkouts~1{id}/get
   * @param id - Checkout ID
   * @returns Promise<OnvoCheckoutI>
   */
  public async get(id: string): Promise<OnvoCheckoutSessionI> {
    const url = buildUrl(this.client.baseUrl, `/checkouts/sessions/${id}`)
    return this.request<OnvoCheckoutSessionI>(url, { method: 'GET' })
  }
}
