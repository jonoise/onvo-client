export interface OnvoProductI {
  id: string
  createdAt: Date
  description?: string | null
  images?: string[] | null
  isActive: boolean
  isShippable: boolean
  name: string
  packageDimensions?: {
    length: number
    width: number
    height: number
    weight: number
  } | null
  mode: 'test' | 'live'
  updatedAt: Date
}

type InsertOnvoProductKeys =
  | 'description'
  | 'images'
  | 'isActive'
  | 'isShippable'
  | 'name'
  | 'packageDimensions'

export interface InsertOnvoProductI
  extends Pick<OnvoProductI, InsertOnvoProductKeys> {}

export type UpateOnvoProductI = Partial<InsertOnvoProductI>
