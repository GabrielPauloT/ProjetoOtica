import { Login } from '@otica/pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages/index'

// import { RequiredAuth } from './PrivateRoute'
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route
          path='/'
          element={
            <RequiredAuth role={['user']}>
            <HomePage />
          </RequiredAuth>
        }
      /> */}
      </Routes>
    </BrowserRouter>
  )
}
