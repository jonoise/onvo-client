export interface OnvoRefundI {
  id: string
  amount: number | null
  currency: 'USD' | 'CRC'
  createdAt: Date
  paymentIntentId: string
  description?: string | null
  mode: 'test' | 'live'
  status: 'pending' | 'succeeded' | 'failed'
  reason?: 'requested_by_customer' | 'fraudulent' | 'duplicate' | null
  updatedAt: Date
  failureReason?: string | null
}

export interface InsertOnvoRefundI
  extends Pick<
    OnvoRefundI,
    'amount' | 'paymentIntentId' | 'description' | 'reason'
  > {}
