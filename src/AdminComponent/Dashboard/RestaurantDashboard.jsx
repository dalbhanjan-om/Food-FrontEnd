import { Grid } from '@mui/material'
import React from 'react'
import OrderTable from '../Orders/OrderTable'
import MenuTable from '../Menu/MenuTable'

const RestaurantDashboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <OrderTable/>
        </Grid>
        <Grid item xs={12} >
          <MenuTable/>
        </Grid>

      </Grid>
    </div>
  )
}

export default RestaurantDashboard
