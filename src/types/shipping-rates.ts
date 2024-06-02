interface DeliveryEstimate {
  minimumUnit: string
  minimumValue: number
  maximumUnit: string
  maximumValue: number
}

export interface OnvoShippingRateI {
  id: string
  createdAt: Date
  amount: number
  currency: 'USD' | 'CRC'
  displayName: string
  isActive?: boolean | null
  deliveryEstimate?: DeliveryEstimate | null
  updatedAt: Date
}

type InsertOnvoShippingRateKeys =
  | 'amount'
  | 'currency'
  | 'displayName'
  | 'isActive'
  | 'deliveryEstimate'

export interface InsertOnvoShippingRateI
  extends Pick<OnvoShippingRateI, InsertOnvoShippingRateKeys> {}
