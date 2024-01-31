import { type FILTERS_PRODUCTS } from './consts'
export interface Product {
  id: number
  title: string
  price: number
  stock: number
  thumbnail: string
  category: string
}

export interface ProductInCart {
  id: number
  title: string
  price: number
  quantity: number
}

export type CategoryValues = typeof FILTERS_PRODUCTS[ keyof typeof FILTERS_PRODUCTS ]

export interface FilterValues {
  category: CategoryValues
  price: number
}
