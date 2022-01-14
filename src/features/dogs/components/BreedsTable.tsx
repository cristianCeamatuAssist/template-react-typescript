import useSwr from 'swr'
// features
import { DogsPathsEnum, dogsApi } from 'features/dogs'

export const BreedsTable = () => {
  const { data: breeds, error } = useSwr(`${DogsPathsEnum.breeds}?limit=20`, dogsApi.getBreeds)
  console.log(`breeds`, breeds)

  return <div>BreedsTable</div>
}
