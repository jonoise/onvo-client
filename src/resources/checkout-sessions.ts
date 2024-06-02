import {
  InsertOnvoCheckoutSessionI,
  OnvoCheckoutSessionI,
} from '../types/checkout'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class Checkouts extends ResourceBase {
  /**
   * Create a new checkout: https://docs.onvopay.com/#tag/Sesiones-de-Checkout/paths/~1v1~1checkout~1sessions~1one-time-link/post
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
   * Expire a checkout: https://docs.onvopay.com/#tag/Sesiones-de-Checkout/paths/~1v1~1checkout~1sessions~1%7Bid%7D~1expire/post
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
   * Get a checkout by ID: https://docs.onvopay.com/#tag/Sesiones-de-Checkout/paths/~1v1~1checkout~1sessions~1one-time-link~1account/get
   * @param id - Checkout ID
   * @returns Promise<OnvoCheckoutI>
   */
  public async get(id: string): Promise<OnvoCheckoutSessionI> {
    const url = buildUrl(this.client.baseUrl, `/checkouts/sessions/${id}`)
    return this.request<OnvoCheckoutSessionI>(url, { method: 'GET' })
  }
}
