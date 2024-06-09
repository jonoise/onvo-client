import { OnvoAddressI } from './address'
import { OmitId } from './generics'

export type OnvoShipping = {
  address: OnvoAddressI
  name: string
  phone?: string
}

export interface OnvoCustomerI {
  id: string
  address: OnvoAddressI | null
  amountSpent: number
  description: string | null
  email: string | null
  lastTransactionAt: string
  mode: 'test' | 'live'
  name: string | null
  phone: string | null
  shipping: OnvoShipping | null
  transactionsCount: number
  createdAt: string
  updatedAt: string
}

export type InsertOnvoCustomerI = Partial<
  Omit<
    OmitId<OnvoCustomerI>,
    'amountSpent' | 'transactionsCount' | 'createdAt' | 'updatedAt' | 'mode'
  >
>
