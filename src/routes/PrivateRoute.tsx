import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthService } from '@otica/services'
import { useUser } from '@otica/stores'

type RoutesPropsData = {
  role?: number[]
  children: JSX.Element
}

export const RequiredAuth = ({ role, children }: RoutesPropsData) => {
  const [hasPermission, setHasPermission] = useState<boolean>(true)
  const { id } = useUser()
  useEffect(() => {
    async function loadRoles() {
      const response = await AuthService.getRoles(1)
      const findRole = response.data.some((r: string) => role?.includes(Number(r)))
      setHasPermission(findRole)
    }

    loadRoles()
  }, [])

  if (!id) {
    return <Navigate to='/login' />
  }

  return hasPermission ? children : <Navigate to='/login' />
}
