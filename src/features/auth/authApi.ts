// features
import { ILoginCredentials } from 'features/auth'

export const login = async ({ email, password }: ILoginCredentials) => {
  console.log(`password`, password, email)
  return { first_name: 'John', last_name: 'Doe' }
}

export const authApi = {
  login,
}
