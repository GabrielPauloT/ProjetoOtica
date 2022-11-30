import create from 'zustand'

type User = {
  id: number | null
  username: string
  createdAt: string
  token: string
  roles: string[] | null
}

export const useUser = create<User>(

    () => ({
      id: null,
      username: '',
      createdAt: '',
      token: '',
      roles: [],
    }),

)
