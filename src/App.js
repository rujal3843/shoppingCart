import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import Header from './component/Header'
import { Single } from './Pages/Single'
import { Category } from './Pages/Category'
import { Cart } from './Pages/Cart'
import Login from './Pages/Login'
import AuthRoutes from './component/AuthRoutes'
import UserRoutes from './component/UserRoutes'

const App = () => {
  return (
    <>
      <Header />

      <Routes>

        <Route element={<AuthRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='single/:id' element={<Single />} />
          <Route path='cate/:category' element={<Category />} />
          <Route path='cart' element={<Cart />} />

        </Route>

          <Route element={<UserRoutes />}>
          <Route path='login' element={<Login />} />
          </Route>

      </Routes>


    </>
  )
}

export default App