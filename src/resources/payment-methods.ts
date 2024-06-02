import {
  InsertOnvoPaymentMethodT,
  OnvoPaymentMethodT,
} from '../types/payment-method'
import { OnvoPaginationParams } from '../types/pagination'
import { buildUrl } from '../utils/url'
import { ResourceBase } from './base'

export class PaymentMethods extends ResourceBase {
  /**
   * List all payment methods: https://docs.onvopay.com/#tag/Metodos-de-Pago/paths/~1v1~1payment-methods/get
   * @param queryParams - Query parameters
   * @returns Promise<PaymentMethod[]>
   */
  public async list(
    queryParams?: OnvoPaginationParams
  ): Promise<OnvoPaymentMethodT[]> {
    const url = buildUrl(
      this.client.baseUrl,
      '/payment-methods',
      queryParams as Record<string, string>
    )
    return this.request<OnvoPaymentMethodT[]>(url, { method: 'GET' })
  }

  /**
   * Create a new payment method: https://docs.onvopay.com/#tag/Metodos-de-Pago/paths/~1v1~1payment-methods/post
   * @param data - Payment method data
   * @returns Promise<OnvoPaymentMethodT>
   */
  public async create(
    data: InsertOnvoPaymentMethodT
  ): Promise<OnvoPaymentMethodT> {
    const url = buildUrl(this.client.baseUrl, '/payment-methods')
    return this.request<OnvoPaymentMethodT>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-Pago/paths/~1v1~1payment-methods~1{id}/get
   * @param id - Payment method ID
   * @returns Promise<OnvoPaymentMethodT>
   */
  public async detach(id: string): Promise<OnvoPaymentMethodT> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}/detach`)
    return this.request<OnvoPaymentMethodT>(url, { method: 'POST' })
  }

  /**
   * Get a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-Pago/paths/~1v1~1payment-methods~1{id}/get
   * @param id - Payment method ID
   * @returns Promise<OnvoPaymentMethodT>
   */

  public async get(id: string): Promise<OnvoPaymentMethodT> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}`)
    return this.request<OnvoPaymentMethodT>(url, { method: 'GET' })
  }

  /**
   * Update a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-Pago/paths/~1v1~1payment-methods~1{id}/put
   * @param id - Payment method ID
   * @param data - Payment method data
   * @returns Promise<OnvoPaymentMethodT>
   */

  public async update(
    id: string,
    data: UpdateOnvoPaymentMethodI
  ): Promise<OnvoPaymentMethodT> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}`)
    return this.request<OnvoPaymentMethodT>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Verify a payment method by ID: https://docs.onvopay.com/#tag/Metodos-de-Pago/paths/~1v1~1payment-methods~1{id}~1verify/post
   * @param id - Payment method ID
   * @returns Promise<OnvoPaymentMethodT>
   */

  public async verify(
    id: string,
    data: VerifyOnvoPaymentMethodI
  ): Promise<OnvoPaymentMethodT> {
    const url = buildUrl(this.client.baseUrl, `/payment-methods/${id}/verify`)
    return this.request<OnvoPaymentMethodT>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }
}

interface UpdateOnvoPaymentMethodI
  extends Pick<InsertOnvoPaymentMethodT, 'billing'> {}

interface VerifyOnvoPaymentMethodI {
  amount: number
}
