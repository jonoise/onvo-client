import { InsertOnvoRefundI, OnvoRefundI } from '../types/refunds'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class Refunds extends ResourceBase {
  /**
   * Create a new refund: https://docs.onvopay.com/#tag/Reembolsos/paths/~1v1~1refunds/post
   * @param data - Refund data
   * @returns Promise<OnvoRefundI>
   */
  public async create(data: InsertOnvoRefundI): Promise<OnvoRefundI> {
    const url = buildUrl(this.client.baseUrl, '/refunds')
    return this.request<OnvoRefundI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a refund by ID: https://docs.onvopay.com/#tag/Reembolsos/paths/~1v1~1refunds~1{id}/get
   * @param id - Refund ID
   * @returns Promise<OnvoRefundI>
   */

  public async get(id: string): Promise<OnvoRefundI> {
    const url = buildUrl(this.client.baseUrl, `/refunds/${id}`)
    return this.request<OnvoRefundI>(url, { method: 'GET' })
  }
}
