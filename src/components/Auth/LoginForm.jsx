import { Button, TextField, Typography } from '@mui/material'

import React from 'react'

import {  Field, Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../State/Authencation/Action';

const initialValues = {
    email: '',
    password: '',
   
  
}
const LoginForm = () => {
    const navigate=useNavigate()

    const dispatch=useDispatch()
    const handleSubmit=(values)=>{
      dispatch(loginUser({userData:values,navigate}))

    }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login Form
      </Typography>
      <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}>
            <Form>
            <Field
                as={TextField}
                name="email"
                label="E-mail"
                fullWidth
                variant="outlined"
                margin="normal"
                >

                </Field>
                <Field
                as={TextField}
                name="password"
                label="Password"
                fullWidth
                variant="outlined"
                margin="normal"
                >
               

                </Field>
                <Button sx={{mt:2,padding:"1rem"}} fullWidth type='submit' variant='contained'>
                    Login
                </Button>
            </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{mt:3}}>
        Don't have an account?
        <Button size='small' onClick={()=>navigate("/account/register")}  >
            Sign Up
        </Button>
      </Typography>
    </div>
  )
}

export default LoginForm
