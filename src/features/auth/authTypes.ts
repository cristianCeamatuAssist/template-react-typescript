export interface IUser {
  first_name: string
  last_name: string
}

export interface ILoginResponse {
  email: string
  given_name: string
  family_name: string
  signInUserSession: {
    accessToken: { jwtToken: string }
    idToken: { jwtToken: string }
    refreshToken: { token: string }
  }
}

export interface ILoginCredentials {
  email: string
  password: string
}
