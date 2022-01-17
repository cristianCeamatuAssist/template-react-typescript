// features
import { ITableState } from 'features/dogs'

export const createApiQueryFromState = (state: ITableState) => {
  const { page, itemsPerPage, ordering, searchQuery, filters } = state

  let query = `?page=${page - 1 || 0}&limit=${itemsPerPage}`

  if (ordering) query += `&ordering=${ordering}`
  if (searchQuery?.length) query += `&search=${searchQuery}`
  if (filters) {
    Object.keys(filters).forEach((filter) => {
      filters[filter].forEach((value) => (query += `&${filter}=${value}`))
    })
  }

  return query
}
