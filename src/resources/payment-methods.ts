import {
  InsertOnvoPaymentMethodI,
  OnvoPaymentMethodI,
} from '../types/payment-method'
import { OnvoPaginationParams, PaginatedResponse } from '../types/pagination'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class PaymentMethods extends ResourceBase {
  /**
   * List all payment methods: https://docs.onvopay.com/#tag/Metodos-de-pago/paths/~1v1~1payment-methods/get
   * @param queryParams - Query parameters
   * @returns Promise<PaymentMethod[]>
   */
  public async list(
    queryParams?: OnvoPaginationParams
  ): Promise<PaginatedResponse<OnvoPaymentMethodI>> {
    const url = buildUrl(
      this.client.baseUrl,
      '/payment-methods',
      queryParams as Record<string, string>
    )
    return this.request<PaginatedResponse<OnvoPaymentMethodI>>(url, {
      method: 'GET',
    })
  }

  /**
   * Create a new payment method: https://docs.onvopay.com/#tag/Metodos-de-pago/paths/~1v1~1payment-methods/post
   * @param data - Payment method data
   * @returns Promise<OnvoPaymentMethodI>
   */
  public async create(
    data: InsertOnvoPaymentMethodI
  ): Promise<OnvoPaymentMethodI> {
    const url = buildUrl(this.client.baseUrl, '/payment-methods')
    return this.request<OnvoPaymentMethodI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-pago/paths/~1v1~1payment-methods~1%7Bid%7D~1detach/post
   * @param id - Payment method ID
   * @returns Promise<OnvoPaymentMethodI>
   */
  public async detach(id: string): Promise<OnvoPaymentMethodI> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}/detach`)
    return this.request<OnvoPaymentMethodI>(url, { method: 'POST' })
  }

  /**
   * Get a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-pago/paths/~1v1~1payment-methods~1%7Bid%7D/get
   * @param id - Payment method ID
   * @returns Promise<OnvoPaymentMethodI>
   */

  public async get(id: string): Promise<OnvoPaymentMethodI> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}`)
    return this.request<OnvoPaymentMethodI>(url, { method: 'GET' })
  }

  /**
   * Update a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-pago/paths/~1v1~1payment-methods~1%7Bid%7D/post
   * @param id - Payment method ID
   * @param data - Payment method data
   * @returns Promise<OnvoPaymentMethodI>
   */

  public async update(
    id: string,
    data: UpdateOnvoPaymentMethodI
  ): Promise<OnvoPaymentMethodI> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}`)
    return this.request<OnvoPaymentMethodI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Verify a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-pago/paths/~1v1~1payment-methods~1%7Bid%7D~1verify/post
   * @param id - Payment method ID
   * @returns Promise<OnvoPaymentMethodI>
   */

  public async verify(
    id: string,
    data: VerifyOnvoPaymentMethodI
  ): Promise<OnvoPaymentMethodI> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}/verify`)
    return this.request<OnvoPaymentMethodI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }
}

interface UpdateOnvoPaymentMethodI
  extends Pick<InsertOnvoPaymentMethodI, 'billing'> {}

interface VerifyOnvoPaymentMethodI {
  amount: number
}
