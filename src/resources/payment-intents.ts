import {
  OnvoPaymentIntentI,
  InsertOnvoPaymentIntentI,
  UpdateOnvoPaymentIntentI,
} from '../types/payment-intents'
import { OnvoPaginationParams, PaginatedResponse } from '../types/pagination'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class PaymentIntents extends ResourceBase {
  /**
   * List all payment intents: https://docs.onvopay.com/#tag/Intenciones-de-pago/paths/~1v1~1payment-intents~1account/get
   * @param queryParams - Query parameters
   * @returns Promise<PaymentIntent[]>
   */
  public async list(
    queryParams?: OnvoPaginationParams
  ): Promise<PaginatedResponse<OnvoPaymentIntentI>> {
    const url = buildUrl(
      this.client.baseUrl,
      '/payment-intents/account',
      queryParams as Record<string, string>
    )
    return this.request<PaginatedResponse<OnvoPaymentIntentI>>(url, {
      method: 'GET',
    })
  }

  /**
   * Create a new payment intent: https://docs.onvopay.com/#tag/Intenciones-de-pago/paths/~1v1~1payment-intents/post
   * @param data - Payment intent data
   * @returns Promise<OnvoPaymentIntentI>
   */

  public async create(
    data: InsertOnvoPaymentIntentI
  ): Promise<OnvoPaymentIntentI> {
    const url = buildUrl(this.client.baseUrl, '/payment-intents')
    return this.request<OnvoPaymentIntentI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a payment intent by ID: https://docs.onvopay.com/#tag/Intenciones-de-pago/paths/~1v1~1payment-intents~1%7Bid%7D/get
   * @param id - Payment intent ID
   * @returns Promise<OnvoPaymentIntentI>
   */
  public async get(id: string): Promise<OnvoPaymentIntentI> {
    const url = buildUrl(this.client.baseUrl, `/payment-intents/${id}`)
    return this.request<OnvoPaymentIntentI>(url, { method: 'GET' })
  }

  /**
   * Update a payment intent: https://docs.onvopay.com/#tag/Intenciones-de-pago/paths/~1v1~1payment-intents~1%7Bid%7D/post
   * @param id - Payment intent ID
   * @param data - Payment intent data
   * @returns Promise<OnvoPaymentIntentI>
   */

  public async update(
    id: string,
    data: UpdateOnvoPaymentIntentI
  ): Promise<OnvoPaymentIntentI> {
    const url = buildUrl(this.client.baseUrl, `/payment-intents/${id}`)
    return this.request<OnvoPaymentIntentI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Confirm a payment intent: https://docs.onvopay.com/#tag/Intenciones-de-pago/paths/~1v1~1payment-intents~1%7Bid%7D~1confirm/post
   * @param id - Payment intent ID
   * @returns Promise<OnvoPaymentIntentI>
   */

  public async confirm(
    id: string,
    body: { paymentMethodId: string; returnUrl?: string }
  ): Promise<OnvoPaymentIntentI> {
    const url = buildUrl(this.client.baseUrl, `/payment-intents/${id}/confirm`)
    return this.request<OnvoPaymentIntentI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  }

  /**
   * Capture a payment intent: https://docs.onvopay.com/#tag/Intenciones-de-pago/paths/~1v1~1payment-intents~1%7Bid%7D~1capture/post
   * @param id - Payment intent ID
   * @returns Promise<OnvoPaymentIntentI>
   */

  public async capture(
    id: string,
    body?: { amountToCapture?: number }
  ): Promise<OnvoPaymentIntentI> {
    const url = buildUrl(this.client.baseUrl, `/payment-intents/${id}/capture`)
    return this.request<OnvoPaymentIntentI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  }

  /**
   * Cancel a payment intent: https://docs.onvopay.com/#tag/Intenciones-de-pago/paths/~1v1~1payment-intents~1%7Bid%7D~1cancel/post
   * @param id - Payment intent ID
   * @returns Promise<OnvoPaymentIntentI>
   */

  public async cancel(id: string): Promise<OnvoPaymentIntentI> {
    const url = buildUrl(this.client.baseUrl, `/payment-intents/${id}/cancel`)
    return this.request<OnvoPaymentIntentI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
