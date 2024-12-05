import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'

const Favourites = () => {
  const {auth} = useSelector(store=>store)
  console.log("auth",auth)
  console.log("fav",auth.favourites)
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>
            My Favourites
      </h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        {
            auth.favorites.map((item)=><RestaurantCard item={item}/>)
        }

      </div>
    </div>
  )
}

export default Favourites
