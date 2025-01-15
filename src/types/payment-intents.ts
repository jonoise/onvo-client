export interface OnvoPaymentIntentI {
  id: string
  amount: number
  baseAmount: number
  exchangeRate: number
  capturableAmount: number
  receivedAmount: number
  captureMethod?: 'manual' | 'automatic' | null
  currency: 'USD' | 'CRC'
  createdAt: string
  customerId?: string | null
  description?: string | null
  charges: OnvoChargeI[]
  lastPaymentError?: OnvoPaymentErrorI | null
  mode: 'test' | 'live'
  status:
    | 'requires_confirmation'
    | 'requires_payment_method'
    | 'requires_action'
    | 'succeeded'
    | 'refunded'
    | 'canceled'
  updatedAt: string
  metadata?: object | null
  balanceTransaction?: OnvoPaymentIntentBalanceTransactionI
  nextAction: OnvoNextActionI
}

export interface OnvoPaymentIntentBalanceTransactionI {
  id: string
  type: 'charge'
  status: 'available'
  currency: string
  description: string
  createdAt: string
  amount: number
  net: number
  fee: number
  vatTax: number
  incomeTax: number
  marketplaceAppFee: number
  feeDetails: FeeDetail[] // Assuming feeDetails contains an array of objects
}

interface FeeDetail {
  // Define properties for each fee detail if known
  [key: string]: any // Placeholder for unknown structure
}

export interface InsertOnvoPaymentIntentI
  extends Pick<
    OnvoPaymentIntentI,
    | 'amount'
    | 'currency'
    | 'captureMethod'
    | 'customerId'
    | 'description'
    | 'metadata'
  > {
  onBehalfOf?: string
}

export type UpdateOnvoPaymentIntentI = Partial<InsertOnvoPaymentIntentI>

export interface OnvoChargeI {
  id: string
  amount: number
  baseAmount: number
  exchangeRate: number
  currency: 'USD' | 'CRC'
  createdAt: string
  failureCode?: string | null
  failureMessage?: string | null
  isApproved?: boolean
  isCaptured?: boolean
  status: 'failed' | 'succeeded' | 'pending' | 'refunded' | 'voided'
}

export interface OnvoNextActionI {
  type: 'redirect_to_url'
  redirectToUrl: OnvoRedirectInfoI
}

export interface OnvoRedirectInfoI {
  url: string
  returnUrl: string
}

export interface OnvoPaymentErrorI {
  code: string
  message: string
  type: 'processing_error'
}
