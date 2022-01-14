import axios from 'axios'
// features
import { IBreed } from 'features/dogs'

export const httpDogs = axios.create({
  baseURL: process.env.REACT_APP_DOGS_URL,
})

export const getBreeds = async (url: string): Promise<IBreed[]> => {
  const { data } = await httpDogs.get(url)
  return data
}

export const dogsApi = {
  getBreeds,
}
