import { OnvoPaginationParams } from '../types/pagination'
import {
  InserOnvoSubscriptionItemI,
  InsertOnvoSubscriptionI,
  OnvoSubscriptionI,
  OnvoSubscriptionItemI,
} from '../types/subscription'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class Subscriptions extends ResourceBase {
  /**
   * List all subscriptions: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions/get
   * @param queryParams - Query parameters
   * @returns Promise<Subscription[]>
   */
  public async list(
    queryParams?: OnvoPaginationParams
  ): Promise<OnvoSubscriptionI[]> {
    const url = buildUrl(
      this.client.baseUrl,
      '/subscriptions',
      queryParams as Record<string, string>
    )
    return this.request<OnvoSubscriptionI[]>(url, { method: 'GET' })
  }

  /**
   * Create a new subscription: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions/post
   * @param data - Subscription data
   * @returns Promise<OnvoSubscriptionI>
   */

  public async create(
    data: InsertOnvoSubscriptionI
  ): Promise<OnvoSubscriptionI> {
    const url = buildUrl(this.client.baseUrl, '/subscriptions')
    return this.request<OnvoSubscriptionI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a subscription by ID: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions~1{id}/get
   * @param id - Subscription ID
   * @returns Promise<OnvoSubscriptionI>
   */
  public async get(id: string): Promise<OnvoSubscriptionI> {
    const url = buildUrl(this.client.baseUrl, `/subscriptions/${id}`)
    return this.request<OnvoSubscriptionI>(url, { method: 'GET' })
  }

  /**
   * Update a subscription: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions~1{id}/put
   * @param id - Subscription ID
   * @param data - Subscription data
   * @returns Promise<OnvoSubscriptionI>
   */
  public async update(
    id: string,
    data: InsertOnvoSubscriptionI
  ): Promise<OnvoSubscriptionI> {
    const url = buildUrl(this.client.baseUrl, `/subscriptions/${id}`)
    return this.request<OnvoSubscriptionI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Cancel a subscription: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions~1{id}~1cancel/post
   * @param id - Subscription ID
   * @returns Promise<OnvoSubscriptionI>
   */
  public async cancel(id: string): Promise<OnvoSubscriptionI> {
    const url = buildUrl(this.client.baseUrl, `/subscriptions/${id}/cancel`)
    return this.request<OnvoSubscriptionI>(url, { method: 'POST' })
  }

  /**
   * Confirm a subscription: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions~1{id}~1confirm/post
   * @param id - Subscription ID
   * @param data - Subscription data
   * @returns Promise<OnvoSubscriptionI>
   */

  public async confirm(
    id: string,
    data?: { paymentMethodId: string }
  ): Promise<OnvoSubscriptionI> {
    const url = buildUrl(this.client.baseUrl, `/subscriptions/${id}/confirm`)
    return this.request<OnvoSubscriptionI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Add item to a subscription: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions~1{id}~1add-item/post
   * @param subscriptionId - Subscription ID
   * @param itemId - Item ID
   * @param data - Subscription data
   * @returns Promise<OnvoSubscriptionI>
   */

  public async addItem(
    subscriptionId: string,
    itemId: string,
    data: InserOnvoSubscriptionItemI
  ): Promise<OnvoSubscriptionItemI> {
    const url = buildUrl(
      this.client.baseUrl,
      `/subscriptions/${subscriptionId}/items/${itemId}`
    )
    return this.request<OnvoSubscriptionItemI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Update item in a subscription: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions~1{id}~1items~1{itemId}/put
   * @param subscriptionId - Subscription ID
   * @param itemId - Item ID
   * @param data - Subscription data
   * @returns Promise<OnvoSubscriptionI>
   */

  public async updateItem(
    subscriptionId: string,
    itemId: string,
    data: InserOnvoSubscriptionItemI
  ): Promise<OnvoSubscriptionItemI> {
    const url = buildUrl(
      this.client.baseUrl,
      `/subscriptions/${subscriptionId}/items/${itemId}`
    )
    return this.request<OnvoSubscriptionItemI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Remove item from a subscription: https://docs.onvopay.com/#tag/Suscripciones/paths/~1v1~1subscriptions~1{id}~1items~1{itemId}/delete
   * @param subscriptionId - Subscription ID
   * @param itemId - Item ID
   * @returns Promise<OnvoSubscriptionI>
   */

  public async removeItem(
    subscriptionId: string,
    itemId: string
  ): Promise<OnvoSubscriptionItemI> {
    const url = buildUrl(
      this.client.baseUrl,
      `/subscriptions/${subscriptionId}/items/${itemId}`
    )
    return this.request<OnvoSubscriptionItemI>(url, {
      method: 'DELETE',
    })
  }
}
