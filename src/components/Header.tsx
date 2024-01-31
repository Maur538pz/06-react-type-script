import { Filters } from './Filters'
import { CartIcon } from './Icons'
import './style.css'
export const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <h1>React Shop <CartIcon/></h1>
      <Filters/>
    </header>
  )
}
