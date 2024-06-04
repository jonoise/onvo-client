import { OnvoAddressT } from './address'

export type OnvoShipping = {
  address: OnvoAddressT
  name: string
  phone?: string
}

export interface OnvoCustomerI {
  address?: OnvoAddressT
  description?: string
  email: string
  name: string
  phone?: string
  shipping?: OnvoShipping
}
