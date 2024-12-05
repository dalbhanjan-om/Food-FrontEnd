import { Button, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../components/State/Restaurant/Action';

export default function CreateFoodCategoryForm() {
    const { restaurant } = useSelector((store) => store);
    const dispatch=useDispatch();
    const [formData, setFormData] = React.useState({
        categoryName: '',
        restaurantId:""
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            name: formData.categoryName,
            restaurant_id: formData.restaurantId
        }
        dispatch(createCategoryAction({reqData:data,jwt:localStorage.getItem('jwt')}))
        console.log(data)

    }
    const handleInputChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <div className='p-5'>
            <h1 className='text-gray-400 text-centre text-xl pb-10'>Create Food Category</h1>
            <form    className="space-y-5 flex flex-col items-center" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="categoryName"
              name="categoryName"
              label="Food Category"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.cateoryName}
            />
            <Button className=' items-center justify-center' variant="contained" type="submit">
                Create Category

            </Button>
            </form>
        </div>
    </div>
  )
}
