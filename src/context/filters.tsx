import { createContext, useState } from 'react'
import { type FilterValues } from '../types/types'

export const FiltersContext = createContext({})

interface Props {
  children: JSX.Element | JSX.Element[]
}
const INITIAL_STATE: FilterValues = {
  category: 'all',
  price: 0
}
export const FilterProvider = ({ children }: Props): JSX.Element => {
  const [filterSelected, setFilterSelected] = useState<FilterValues>(INITIAL_STATE)
  return (
    <FiltersContext.Provider value={
      {
        filterSelected,
        setFilterSelected
      }
    }>
      {children}
    </FiltersContext.Provider>
  )
}
