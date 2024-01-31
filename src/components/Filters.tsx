import { FILTERS_PRODUCTS } from '../types/consts'
import { type ChangeEvent, useId } from 'react'
import { type FilterValues, type CategoryValues } from '../types/types'
import { useFilters } from '../hooks/useFilters'
import './style.css'

export const Filters = (): JSX.Element => {
  const {
    handleFilterChange: filterChange,
    filterSelected: stateFilters
  } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  // const [stateFilters, setStateFilters] = useState<FilterValues>({ category: 'all', price: 0 })
  const handleChangePrice = (event: ChangeEvent<HTMLInputElement>): void => {
    const newState: FilterValues = { ...stateFilters, price: Number(event.target.value) }
    // setStateFilters(newState)
    filterChange(newState)
  }

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newState: FilterValues = { ...stateFilters, category: event.target.value as CategoryValues }
    // setStateFilters(newState)
    filterChange(newState)
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
        type="range"
        id={minPriceFilterId}
        min='0'
        max='1000'
        name='price'
        onChange={handleChangePrice}
        value={stateFilters.price} />
        <span>{stateFilters.price}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categorias</label>
        <select
        id={categoryFilterId}
        onChange={handleChangeCategory}
        name='category'
        value={stateFilters.category}
        >
          {Object.entries(FILTERS_PRODUCTS).map(([key, value]) =>
          <option
          key={key}
          value={value}>
            {key}
          </option>)}
        </select>
      </div>
    </section>
  )
}
