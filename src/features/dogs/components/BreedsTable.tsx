import styled, { css } from 'styled-components'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'state'
// components
import { Table, TableBodyCell, TableImage } from 'components'
// features
import { updateTableState, getBreeds } from 'features/dogs'

export const BreedsTable = () => {
  // global state
  const { itemsPerPage, page, totalItems, apiQuery, data, isLoading, error } = useAppSelector(
    (state) => state.dogs.breedsTable,
  )

  // utils
  const dispatch = useAppDispatch()

  // effects
  useEffect(() => {
    dispatch(getBreeds(apiQuery))
  }, [apiQuery, dispatch])

  // handlers
  const changeItemsPerPageHandler = (value: number | string) => {
    dispatch(updateTableState({ table: 'breedsTable', prop: 'itemsPerPage', value }))
  }

  const changePageHandler = (value: number | string) => {
    dispatch(updateTableState({ table: 'breedsTable', prop: 'page', value }))
  }

  // variables
  const columns = [
    { prop: 'name', label: 'Name' },
    { prop: 'breed_group', label: 'Breed Group' },
    { prop: 'life_span', label: 'Life Span' },
    { prop: 'origin', label: 'Origin' },
    { prop: 'picture', label: 'Picture' },
  ]

  const rows = data?.map((breed) => {
    return {
      id: breed.id,
      name: breed.name,
      origin: breed.origin,
      breed_group: breed.breed_group,
      life_span: breed.life_span,
      picture: <TableBodyCell component={<TableImage src={breed.image.url} alt={breed.name} />} />,
    }
  })

  return (
    <Div>
      <Table
        isLoading={isLoading}
        error={error}
        columns={columns}
        rows={rows}
        pagination={{ itemsPerPage, page, totalItems, changePageHandler, changeItemsPerPageHandler }}
      />
    </Div>
  )
}

const Div = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - ${theme.constants.navbarHeight} - ${theme.constants.tableHeadHeight});
  `}
  box-shadow: ${({ theme }) => theme.shadows.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
`
