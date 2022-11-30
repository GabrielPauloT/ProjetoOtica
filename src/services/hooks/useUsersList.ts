import { ReactQueryKeysEnum } from '@otica/@types'

import { useQuery } from 'react-query'

import { AuthService } from '..'

export const getUsersList = async () => {
  const { data } = await AuthService.getUsers()

  return data
}

export const useUsersList = () => {
  return useQuery(ReactQueryKeysEnum.USERS_LIST, getUsersList)
}
