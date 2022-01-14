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

export enum DogsPathsEnum {
  breeds = '/v1/breeds',
}
