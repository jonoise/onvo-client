export interface OnvoPriceI {
  id: string
  unitAmount: number
  currency: 'USD' | 'CRC'
  createdAt: string
  nickname?: string | null
  isActive: boolean
  productId: string
  recurring?: {
    interval: 'day' | 'week' | 'month' | 'year'
    intervalCount: number
  } | null
  mode: 'test' | 'live'
  type: 'one_time' | 'recurring'
  updatedAt: string
}

type InsertOnvoPriceKeys =
  | 'unitAmount'
  | 'currency'
  | 'nickname'
  | 'isActive'
  | 'productId'
  | 'recurring'
  | 'type'

export interface InsertOnvoPriceI
  extends Pick<OnvoPriceI, InsertOnvoPriceKeys> {}

export type UpdateOnvoPriceI = Partial<InsertOnvoPriceI>
