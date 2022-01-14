import useSWR from 'swr'
import styled from 'styled-components'
// components
import { Table, TableBodyCell, TableImage } from 'components'
// features
import { DogsPathsEnum, dogsApi } from 'features/dogs'

export const BreedsTable = () => {
  const { data: breeds, error } = useSWR(`${DogsPathsEnum.breeds}?limit=20`, dogsApi.getBreeds)

  // variables
  const columns = [
    { prop: 'name', label: 'Name' },
    { prop: 'breed_group', label: 'Breed Group' },
    { prop: 'life_span', label: 'Life Span' },
    { prop: 'origin', label: 'Origin' },
    { prop: 'picture', label: 'Picture' },
  ]

  const rows = breeds?.map((breed) => {
    return {
      id: breed.id,
      name: breed.name,
      origin: breed.origin,
      breed_group: breed.breed_group,
      life_span: breed.life_span,
      picture: <TableBodyCell component={<TableImage src={breed.image.url} alt={breed.name} />} />,
    }
  })
  const isLoading = !breeds && !error

  return (
    <Div>
      <Table isLoading={isLoading} error={error} columns={columns} rows={rows} />
    </Div>
  )
}

export const Div = styled.div`
  height: calc(
    100vh - ${({ theme }) => theme.constants.navbarHeight} - ${({ theme }) => theme.constants.tableHeadHeight}
  );
  box-shadow: ${({ theme }) => theme.shadows.light};
  border-radius: ${({ theme }) => theme.borderRadius};
`
