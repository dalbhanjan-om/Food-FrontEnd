import { Button, CircularProgress, Grid, IconButton, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { UploadImageToCloudinary } from "./Util/UploadImageToCloudinary";
import { useDispatch } from "react-redux";
import { createRestaurant } from "../components/State/Restaurant/Action";
import { Token } from "@mui/icons-material";







const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  openHours: "Mon-Sun : 9:00 AM-12:00AM",
  images: [],
};
const CreateRestaurantForm = () => {
  const dispatch=useDispatch()
  const [uploadImage, setUploadImage] = useState(false);
  const jwt=localStorage.getItem('jwt');
  const handleImageChange = async(e) => {
    const file=e.target.files[0];
    setUploadImage(true);
    const image= await UploadImageToCloudinary(file)
   

    formik.setFieldValue("images",[...formik.values.images,image])
    setUploadImage(false);
  };
  const handleRemoveImgage = (index) => {
    const updatedImages=[...formik.values.images]
    updatedImages.splice(index,1);
    formik.setFieldValue("images",updatedImages);
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data={
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        address: {
          streetAddress: values.streetAddress,
          city: values.city,
          stateProvince: values.stateProvince,
          postalCode: values.postalCode,
          country:values.country,

        },
        contactInformation:{
          email: values.email,
          mobile: values.mobile,
          twitter: values.twitter,
          instagram: values.instagram,
        },
      
        openHours: values.openHours,
        images: values.images,

      }
      console.log("data", data);
      dispatch(createRestaurant({data,token:jwt}))
    },
  });
  return (
    <div className="py-10 px-5  lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Restaurant
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                accept="image/*"
                onChange={handleImageChange}
                id="fileInput"
                style={{ display: "none" }}
                type="file"
              />
              <label htmlFor="fileInput" className="relative">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2 ">
                {formik.values.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      className="w-24 h-24 object-cover "
                      key={index}
                      src={image}
                      alt="img photo"
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => handleRemoveImgage(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
         
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="cuisineType"
              name="cuisineType"
              label="CuisineType"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.cuisineType}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="openHours"
              name="openHours"
              label="OpenHours"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.openHours}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="streetAddress"
              name="streetAddress"
              label="StreetAddress"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.streetAddress}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="City"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              id="stateProvince"
              name="stateProvince"
              label="State"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.stateProvince}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              id="postalCode"
              name="postalCode"
              label="Pincode"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.postalCode}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              id="country"
              name="country"
              label="Country"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="mobile"
              name="mobile"
              label="Mobile"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.mobile}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="instagram"
              name="instagram"
              label="Instagram"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.instagram}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="twitter"
              name="twitter"
              label="Twitter"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.twitter}
            />
          </Grid>
          </Grid>
          <Button variant="contained" type="submit">
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurantForm;
