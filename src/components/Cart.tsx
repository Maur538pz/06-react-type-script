import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './style.css'

export const Cart = (): JSX.Element => {
  const cartCheckboxId = useId()
  return (
    <div>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon/>
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden/>

      <aside className='cart'>
        <ul>
          <li>
            <img src="https://tiendasishop.com/media/catalog/product/m/h/mhdj3lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" alt="iphone" />
            <div>
              <strong>Iphone</strong> - 1445
            </div>
            <footer>
              <small> Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon/>
        </button>
      </aside>
    </div>
  )
}
