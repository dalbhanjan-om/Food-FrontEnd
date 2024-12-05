import { Button, TextField, Typography } from "@mui/material";

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authencation/Action";
import { useDispatch } from "react-redux";
const initialValues = {
  fullname: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};
const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerUser({userData:values,navigate}))
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Sign-up
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullname"
            label="Fullname"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          <Field
            as={TextField}
            name="email"
            label="E-mail"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          ></Field>
        
            <Field
            as={Select}
            fullWidth
            margin="normal"
              labelId="role-simple-select-label"
              id="role-simple-select"
             //value={age}
              name="role"
              //onChange={handleChange}
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_OWNER"}>Restaurant Owner</MenuItem>
            
            </Field>
          
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Sign-Up
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        if have an account already?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
