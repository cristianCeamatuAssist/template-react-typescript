export interface IBreedsApiResponse {
  totalItems: number
  page: number
  itemsPerPage: number
  results: IBreed[]
}

export interface IBreed {
  id: string
  name: string
  temperament: string
  life_span: string
  alt_names: string
  wikipedia_url: string
  origin: string
  country_code: string
  image: IBreedImage
  bred_for: string
  breed_group: string
}

export interface IBreedImage {
  height: number
  id: string
  url: string
  width: number
}

export interface IUpdateTableRequest {
  table: 'breedsTable'
  prop: 'rows' | 'itemsPerPage' | 'totalItems' | 'page' | 'sorting'
  value: string | number | null
}

export interface ITableState {
  itemsPerPage: number
  page: number
  totalItems: number
  ordering: string | null
  filters: { [k: string]: string[] } | null
  searchQuery: string | null
  apiQuery: string
  isLoading: boolean
  error: null | any
}

export enum DogsPathsEnum {
  breeds = '/v1/breeds',
}
