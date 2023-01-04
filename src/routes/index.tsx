import { HomePage, Login, Users, UsersCreate, UsersEdit } from '@otica/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RequiredAuth } from './PrivateRoute'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route
          path='/'
          element={
            <RequiredAuth role={[1]}>
              <HomePage />
            </RequiredAuth>
          }
        />
        <Route
          path='/lista-usuario'
          element={
            <RequiredAuth role={[1]}>
              <Users />
            </RequiredAuth>
          }
        />
        <Route
          path='/cadastro-usuario'
          element={
            <RequiredAuth role={[1]}>
              <UsersCreate />
            </RequiredAuth>
          }
        />
        <Route
          path='/editar-usuario'
          element={
            <RequiredAuth role={[1]}>
              <UsersEdit />
            </RequiredAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
