import type { FilterValues, Product } from '../types/types'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export const useFilters = (): {
  handleFilterChange: (changeFilter: FilterValues) => void
  handleFilters: (products: Product[]) => Product[]
  filterSelected: FilterValues
} => {
  const {filterSelected, setFilterSelected} = useContext(FiltersContext)
  const handleFilters = (productos: Product[]): Product[] => {
    return productos.filter(producto =>
      (
        producto.price >= filterSelected.price && (filterSelected.category === 'all' || producto.category === filterSelected.category)
      ))
  }

  const handleFilterChange = (changeFilter: FilterValues): void => {
    setFilterSelected(changeFilter)
  }
  return {
    handleFilterChange,
    handleFilters,
    filterSelected
  }
}
