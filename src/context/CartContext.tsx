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
  const addToCart = (product: ProductInCart): void => {
    // cheakear si el producto ra es en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    } else {
      setCart(prevState => ([
        ...prevState,
        {
          ...product,
          quantity: 1
        }
      ]))
    }
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
