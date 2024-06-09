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
  nextAction: OnvoNextActionI
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
  > {}

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
