import { useFilters } from '../hooks/useFilters'
import './style.css'

export const Debuger = (): JSX.Element => {
  const { filterSelected: filters } = useFilters()
  return (
    <div className='debuger'>
      {JSON.stringify(filters, null, 2)}
    </div>
  )
}
