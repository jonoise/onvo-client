import { OnvoAddressI } from './address'

export type OnvoShipping = {
  address: OnvoAddressI
  name: string
  phone?: string
}

export interface OnvoCustomerI {
  address?: OnvoAddressI
  description?: string
  email: string
  name: string
  phone?: string
  shipping?: OnvoShipping
}
