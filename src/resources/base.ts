import { OnvoClient } from '../client'

export class ResourceBase {
  protected client: OnvoClient

  constructor(client: OnvoClient) {
    this.client = client
  }

  protected async request<T>(url: string, config: RequestInit): Promise<T> {
    return this.client.request<T>(url, config)
  }
}
