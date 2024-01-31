import { type Product } from '../types/types'
import { AddToCartIcon } from './Icons'
import './style.css'
interface Props {
  products: Product[]
}
export const Products = (props: Props): JSX.Element => {
  const { products } = props
  return (
    <main>
      <ul className='products-list'>
        {products.map(product =>
        <li key={product.id}
        className='product-item'>
          <div className='product-item_header'>
          <strong>{`${product.title} - $${product.price}`}</strong>
          <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className='product-item_button'>
            <button>Agregar<AddToCartIcon/></button>
          </div>

        </li>)}
      </ul>
    </main>
  )
}
