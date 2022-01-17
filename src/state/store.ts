import { configureStore } from '@reduxjs/toolkit'
import { counterReducer as counter } from 'features/counter'
import { authReducer as auth } from 'features/auth'
import { dogsReducer as dogs } from 'features/dogs/dogsSlice'

export const store = configureStore({
  reducer: {
    counter,
    auth,
    dogs,
  },
})
