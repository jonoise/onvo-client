export interface OnvoSubscriptionI {
  id: string
  billingCycleAnchor?: string | null
  status?:
    | 'active'
    | 'past_due'
    | 'canceled'
    | 'unpaid'
    | 'incomplete'
    | 'incomplete_expired'
    | 'trialing'
  cancelAt?: string | null
  cancelAtPeriodEnd?: boolean | null
  canceledAt?: string | null
  createdAt: string
  currentPeriodStart?: string | null
  currentPeriodEnd?: string | null
  customerId: string
  description?: string | null
  paymentBehavior?: 'allow_incomplete' | 'default_incomplete' | null
  startDate?: string | null
  paymentMethodId?: string | null
  mode: 'test' | 'live'
  items: OnvoSubscriptionItem[]
  trialPeriodDays?: number | null
  trialStart?: string | null
  trialEnd?: string | null
  updatedAt: string
  latestInvoice: OnvoiInvoiceI
}

interface OnvoSubscriptionItem {
  priceId: string
  quantity: number
}

interface OnvoiInvoiceI {
  currency: string
  description: string
  status: 'paid' | 'unpaid' | 'pending' | 'void' | 'deleted'
  invoiceAdditionalItems?: OnvoInvoiceAdditionalItem[]
}

interface OnvoInvoiceAdditionalItem {
  description: string
  currency: string
  quantity: number
}

type InsertOnvoSubscriptionKeys =
  | 'billingCycleAnchor'
  | 'status'
  | 'cancelAt'
  | 'cancelAtPeriodEnd'
  | 'customerId'
  | 'description'
  | 'paymentBehavior'
  | 'startDate'
  | 'paymentMethodId'
  | 'items'
  | 'trialPeriodDays'
  | 'currentPeriodStart'
  | 'currentPeriodEnd'

export interface InsertOnvoSubscriptionI
  extends Pick<OnvoSubscriptionI, InsertOnvoSubscriptionKeys> {}

export interface OnvoSubscriptionItemI {
  id: string
  mode: 'test' | 'live'
  description: string
  amount: number
  currency: string
  quantity: number
  updatedAt: string
  createdAt: string
}
type InsertOnvoSubscriptionItemKeys =
  | 'description'
  | 'amount'
  | 'currency'
  | 'quantity'

export interface InsertOnvoSubscriptionItemI
  extends Pick<OnvoSubscriptionItemI, InsertOnvoSubscriptionItemKeys> {}
