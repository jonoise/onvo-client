import { OnvoAddressI } from './address'
import { OnvoCustomerI } from './customer'
import { OmitId } from './generics'

interface OnvoBillingI {
  address: OnvoAddressI
  name: string
  phone?: string
}

export interface OnvoCardI {
  id: string
  accountId: string
  mode: string
  source: string
  holderName: string
  brand: string
  last4: string
  expMonth: number
  expYear: number
  updatedAt: string
  createdAt: string
  customerId: string
  consumerId: string | null
  tokenId: string | null
}

export interface InsertOnvoCardI
  extends OmitId<Pick<OnvoCardI, 'expMonth' | 'expYear' | 'holderName'>> {
  number: string
  cvv: string
}

export type UpdateOnvoCardI = Partial<OmitId<InsertOnvoCardI>>

export interface OnvoBankAccountI {
  currency: string
  entity: string
  maskedIban: string
}

type OnvoMobileNumberT = {
  maskedNumber: string
}

type OnvoZunifyT = {
  pin: 1234
  phoneNumber: '11223344'
}

type OnvoPaymentMethodTypeT = 'bank_account' | 'card' | 'mobile_number'
type OnvoPaymentMethodModeT = 'test' | 'live'
type OnvoPaymentMethodStatusT =
  | 'awaiting_authorization'
  | 'requires_verification'
  | 'active'
  | 'detached'
  | 'suspended'

export interface OnvoPaymentMethodI {
  id: string
  bankAccount?: OnvoBankAccountI
  billing?: OnvoBillingI
  card?: InsertOnvoCardI
  createdAt: string // ISO 8601 date string
  customerId?: string
  customer?: OnvoCustomerI
  consumerId?: string
  mobileNumber?: OnvoMobileNumberT
  mode: OnvoPaymentMethodModeT
  status: OnvoPaymentMethodStatusT
  type: OnvoPaymentMethodTypeT
  zunify?: OnvoZunifyT
  updatedAt: string // ISO 8601 date string
}

export interface InsertOnvoPaymentMethodI
  extends Omit<
    OnvoPaymentMethodI,
    'id' | 'createdAt' | 'updatedAt' | 'mode' | 'status'
  > {}

export type UpdateOnvoPaymentMethodI = Partial<OmitId<InsertOnvoPaymentMethodI>>
