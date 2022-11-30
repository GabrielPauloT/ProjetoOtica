import { AuthService, GetRolesProps, GetUsersPros } from '@otica/@types'

import { api } from './api'

export const logar = (email: string, password: string) => {
  return api.post<AuthService>('/auth/singIn', {
    email,
    password,
  })
}

export const getRoles = (idUser: number) => {
  return api.get<GetRolesProps>(`/roles/${idUser}`)
}

export const getUsers = () => {
  return api.get<GetUsersPros[]>(`/users`)
}
