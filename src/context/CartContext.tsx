import { createContext, useState } from 'react'
import { type ProductInCart } from '../types/types'

// crear contexto
export const CartContext = createContext({})

interface Props {
  children: JSX.Element | JSX.Element[]
}

// crear provider
export const CartProvider = ({ children }: Props): JSX.Element => {
  const [cart, setCart] = useState<ProductInCart[]>([])
  const clearCart = (): void => {
    setCart([])
  }
  const addToCart = (): void => {
    // cheakear si el producto ra es en el carrito
  }
  return (
    <CartContext.Provider value={
      {
        cart,
        clearCart,
        addToCart
      }
    }>
      {children}
    </CartContext.Provider>
  )
}
