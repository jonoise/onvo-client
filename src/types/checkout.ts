export interface OnvoCheckoutSessionI {
  id: string
  accountId: string
  url: string
  updatedAt: Date
  createdAt: Date
  billingAddressCollection: boolean
  allowPromotionCodes: boolean
  successUrl: string
  cancelUrl: string
  status: 'open' | 'expired'
  lineItems: OnvoCheckoutLineItemI[]
  mode: 'test' | 'live'
  shippingAddressCollection: boolean
  shippingCountries: []
  shippingRates: []
  paymentStatus: 'paid' | 'unpaid'
  paymentIntentId: string
}

interface OnvoCheckoutLineItemI {
  id: string
  price: {
    id: string
    currency: string
    mode: 'test' | 'live'
    isActive: boolean
    type: string
    unitAmount: number
    product: any // Define the structure of the product object if needed
  }
  quantity: number
  priceId: number
  unitAmount: number
  currency: string
  description: string
}

export interface InsertOnvoCheckoutSessionI {
  customerName?: string
  customerEmail?: string
  customerPhone?: string
  redirectUrl?: string
  lineItems: OnvoCheckoutLineItemI[]
  metadata?: any
}
