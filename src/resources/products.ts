import { OnvoPaginationParams } from '../types/pagination'
import { ResourceBase } from './base'
import { InsertOnvoProductI, OnvoProductI } from '../types/product'
import { buildUrl } from '../utils/url'

export class Products extends ResourceBase {
  /**
   * List all products: https://docs.onvopay.com/#tag/Productos/paths/~1v1~1products/get
   * @param queryParams - Query parameters
   * @returns Promise<OnvoProduct[]>
   */
  public async list(
    queryParams?: OnvoPaginationParams
  ): Promise<OnvoProductI[]> {
    const url = buildUrl(
      this.client.baseUrl,
      '/products',
      queryParams as Record<string, string>
    )
    return this.request<OnvoProductI[]>(url, { method: 'GET' })
  }

  /**
   * Create a new product: https://docs.onvopay.com/#tag/Productos/paths/~1v1~1products/post
   * @param data - Product data
   * @returns Promise<OnvoProductI>
   */
  public async create(data: InsertOnvoProductI): Promise<OnvoProductI> {
    const url = buildUrl(this.client.baseUrl, '/products')
    return this.request<OnvoProductI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Get a product by ID: https://docs.onvopay.com/#tag/Productos/paths/~1v1~1products~1%7Bid%7D/get
   * @param id - Product ID
   * @returns Promise<OnvoProductI>
   */

  public async get(id: string): Promise<OnvoProductI> {
    const url = buildUrl(this.client.baseUrl, `/products/${id}`)
    return this.request<OnvoProductI>(url, { method: 'GET' })
  }

  /**
   * Update a product: https://docs.onvopay.com/#tag/Productos/paths/~1v1~1products~1%7Bid%7D/post
   * @param id - Product ID
   * @param data - Product data
   * @returns Promise<OnvoProductI>
   */

  public async update(
    id: string,
    data: InsertOnvoProductI
  ): Promise<OnvoProductI> {
    const url = buildUrl(this.client.baseUrl, `/products/${id}`)
    return this.request<OnvoProductI>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  /**
   * Delete a product: https://docs.onvopay.com/#tag/Productos/paths/~1v1~1products~1%7Bid%7D/delete
   * @param id - Product ID
   * @returns Promise<OnvoProductI>
   */
  public async delete(id: string): Promise<OnvoProductI> {
    const url = buildUrl(this.client.baseUrl, `/products/${id}`)
    return this.request<OnvoProductI>(url, { method: 'DELETE' })
  }
}
