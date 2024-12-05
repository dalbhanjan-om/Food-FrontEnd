import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import RestaurantDetails from '../components/Restaurant/RestaurantDetails'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'
import Auth from '../components/Auth/Auth'
import PaymentSuccess from '../components/PaymentSuccess/PaymentSuccess'
import Footer from './Footer'

const CustomerRouter = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account/cart' element={<Cart />} />
        <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/my-profile/*' element={<Profile/>} />
        <Route path='/payment/success/:id' element={<PaymentSuccess/>} />
      </Routes>
     
      <Auth/>
    </div>
  )
}

export default CustomerRouter
