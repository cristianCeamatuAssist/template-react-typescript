import { createSlice } from '@reduxjs/toolkit'
// features
import { IUser } from 'features/auth'

interface IUserState {
  user: IUser | null
}

const initialState = {
  user: {
    first_name: 'John',
    last_name: 'Doe',
  },
} as IUserState

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
    },
  },
})

export const { logout } = authSlice.actions

export const authReducer = authSlice.reducer
