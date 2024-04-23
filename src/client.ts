import { CustomerService } from './services/customers'
/**
 *
 *
 * @param {string}  api_key - Onvo API key
 * @param {boolean} [shouldThrow=false] - Optionally throw an exception when nothing found
 *
 */
export class OnvoClient {
  //   private _url = `https://api.onvopay.com/v1`
  private _headers = new Map<string, string>([
    ['Content-Type', 'application/json'],
    ['Accept', 'application/json'],
  ])

  constructor(private api_key: string) {
    if (!this.api_key) {
      throw new Error('API Key is required')
    }
    this._headers.set('Authorization', `Bearer ${this.api_key}`)
  }

  public customers = new CustomerService()
}
