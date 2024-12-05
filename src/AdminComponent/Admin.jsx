import React, { useEffect } from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'

import Orders from './Orders/Orders'
import Menu from './Menu/Menu'
import FoodCategory from './FoodCategory/FoodCategory'
import Ingredients from './Ingredients/Ingredients'
import Events from './Events/Events'
import RestaurantDashboard from './Dashboard/RestaurantDashboard'
import Details from './Details/Details'
import CreateMenuForm from './Menu/CreateMenuForm'
import CreateFoodCategoryForm from './FoodCategory/CreateFoodCategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantsCategory } from '../components/State/Restaurant/Action'
import { getMenuItemsByRestaurantId } from '../components/State/Menu/Action'
import { fetchRestaurantsOrder } from '../components/State/Restaurant Order/Action'

const Admin = () => {
  const dispatch=useDispatch()
  const {restaurant}=useSelector(store=>store)
  const jwt=localStorage.getItem('jwt')

  useEffect(()=>{
    dispatch(getRestaurantsCategory({jwt,restaurantId:restaurant.usersRestaurant?.id}))
    // dispatch(getMenuItemsByRestaurantId({}) )
    // dispatch(getRestaurantById())
    dispatch(fetchRestaurantsOrder({
      jwt,
      restaurantId:restaurant.usersRestaurant?.id,
      
    }))

  },[])
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
               <AdminSideBar/>
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/category" element={<FoodCategory />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/event" element={<Events />} />
            <Route path="/details" element={<Details />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
            <Route path="/add-foodCategory" element={<CreateFoodCategoryForm/>} />

          </Routes>


        </div>
      </div>
    </div>
  )
}

export default Admin
