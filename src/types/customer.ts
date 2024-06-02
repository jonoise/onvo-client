import { OnvoAddressT } from './address'

export type OnvoShipping = {
  address: OnvoAddressT
  name: string
  phone?: string
}

export type OnvoCustomerT = {
  address?: OnvoAddressT
  description?: string
  email: string
  name: string
  phone?: string
  shipping?: OnvoShipping
}
