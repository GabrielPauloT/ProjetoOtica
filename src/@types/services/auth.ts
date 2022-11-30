export type AuthService = {
  id: number
  jwt: string
  createdAt: string
  name: string
  roles: string[]
}
export type GetRolesProps = string[]

export type GetUsersPros = {
  id: number
  name: string
  email: string
  gender: string
  status: string
}
