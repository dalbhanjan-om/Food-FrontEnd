import { Button, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredientCategory } from '../../components/State/Ingredients/Action';

export default function CreateIngredientCategoryForm() {
    const dispatch=useDispatch()
    const jwt=localStorage.getItem('jwt')
    const{restaurant}=useSelector(store=>store)
    const [formData, setFormData] = React.useState({
        name: '',

    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            name:formData.name,
            restaurantId:restaurant.usersRestaurant.id
        }
      
        console.log(formData)
        dispatch(createIngredientCategory({data,jwt}))

    }
    const handleInputChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <div className='p-5'>
            <h1 className='text-gray-400 text-centre text-xl pb-10'>Create Ingredient Category</h1>
            <form    className="space-y-5 flex flex-col items-center" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Category"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.name}
            />
            <Button className=' items-center justify-center' variant="contained" type="submit">
                Create Category

            </Button>
            </form>
        </div>
    </div>
  )
}
