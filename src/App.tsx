import { products } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useState } from 'react'
import type { Product } from './types/types'
import { useFilters } from './hooks/useFilters'
import { Debuger } from './components/Debuger'
import { Cart } from './components/Cart'

const App = (): JSX.Element => {
  const [productos] = useState<Product[]>(products)
  const { handleFilters } = useFilters()

  const filtererProducts = handleFilters(productos)
  return (
    <div>
      <Header/>
      <Cart/>
      <Products products={filtererProducts}/>
      <Debuger/>
    </div>
  )
}

export default App
