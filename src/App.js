import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import Header from './component/Header'
import { Single } from './Pages/Single'
import { Category } from './Pages/Category'
import { Cart } from './Pages/Cart'

const App = () => {
  return (
    <>
    <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='single/:id' element={<Single />} />
        <Route path='cate/:category' element={<Category />} />
        <Route path='cart' element={<Cart />} />

      </Routes>

    </>
  )
}

export default App