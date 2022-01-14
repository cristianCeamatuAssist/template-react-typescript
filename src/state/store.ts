import { configureStore } from '@reduxjs/toolkit'
import { counterReducer as counter } from 'features/counter'
import { authReducer as auth } from 'features/auth'
import { dogsReducer as dogs } from 'features/dogs'

export const store = configureStore({
  reducer: {
    counter,
    auth,
    dogs,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
