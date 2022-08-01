import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useAuth } from '../context/AuthContext'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from '../pages/Home'
import List from '../pages/List'

const Layout = ({ children }) => {

    const { isAuth } = useAuth();

    //isAuth ? means if the user is logged in show those pages if not show that page after ':'
    //isAuth && means if its true
  return (
    <div>
        {
          isAuth &&
          <Header />
        }
        <Routes>
          {
            isAuth ? 
            <>
            <Route exact path='/' element={<Home/> }></Route>
            <Route exact path='/list' element={<List/> }></Route>
            </>
            :
            <Route exact path='/' element={<Login/> }></Route>
          }
        </Routes>

        {
          isAuth &&
          <Footer />
        }
    </div>
  )
}

export default Layout