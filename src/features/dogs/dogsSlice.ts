import { createSlice } from '@reduxjs/toolkit'
// features
// import { IBreed } from 'features/dogs'

interface IDogsState {}

const initialState = {} as IDogsState

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {},
})

// export const {} = dogsSlice.actions

export const dogsReducer = dogsSlice.reducer
