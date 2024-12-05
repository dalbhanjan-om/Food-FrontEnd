import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient, createIngredientCategory } from '../../components/State/Ingredients/Action';

export default function CreateIngredientForm() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem('jwt');
  const {restaurant,ingredients}=useSelector(store=>store)
    const [formData, setFormData] = React.useState({
        name: '',
        categoryId:""
    });
    const handleSubmit=(e)=>{
      e.preventDefault();
        const data={
          ...formData,
            name: formData.name,
            restaurantId:restaurant.usersRestaurant.id
        }
        console.log(data)
        dispatch(createIngredient({data,jwt}))

        

    }
    const handleInputChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <div className='p-5'>
            <h1 className='text-gray-400 text-centre text-xl pb-10'>Create Ingredient</h1>
            <form    className="space-y-5 flex flex-col items-center" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label=" Name"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.name}
            />
          
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Food Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.ingredientCategoryId}
                  label="Food Category"
                  onChange={handleInputChange}
                  name="categoryId"
                >
                  
                  {ingredients.category.map((item)=><MenuItem value={item.id}>{item.name}</MenuItem>)}
                
                </Select>
              </FormControl>
            
            <Button className=' items-center justify-center' variant="contained" type="submit">
                Create Ingredient 

            </Button>
            </form>
        </div>
    </div>
  )
}
