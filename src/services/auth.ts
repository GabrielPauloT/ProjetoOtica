import { AuthService, GetRolesProps, GetUsersPros } from '@otica/@types'

import { api } from './api'

export const logar = (email: string, password: string) => {
  return api.post<AuthService>('/usuario', {
    email,
    password,
  })
}

export const getRoles = (idUser: number) => {
  return api.get<GetRolesProps>(`/usuario/perfil/${idUser}`)
}

export const getUsers = () => {
  return api.get<GetUsersPros[]>(`/usuario`)
}
