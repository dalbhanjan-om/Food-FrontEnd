import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "@mui/icons-material";
import { updateRestaurantStatus } from "../../components/State/Restaurant/Action";

const Details = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch=useDispatch();
  console.log(restaurant);
  const handleRestaurantStatus = () => {
    dispatch(updateRestaurantStatus({
      restaurantId: restaurant.usersRestaurant.id,
      jwt:localStorage.getItem('jwt'),
    }) )
  };
  
  return (
    <div className="lg:px-20 px-5">
      <div className="py-5 flex justify-center items-center gap-5 ">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          {restaurant.usersRestaurant?.name}
        </h1>
        <div>
          <Button
            color={!restaurant.usersRestaurant?.open ? "primary" : "error"}
            className="py-[1rem] px-[2rem]"
            variant="contained"
            onClick={handleRestaurantStatus}
            size="large"
          >
            {restaurant.usersRestaurant?.open ? "close" :"open"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Restaurant Details </span>}
            />
          </Card>
          <CardContent>
            <div className="space-y-4 text-gray-200">
              <div className="flex">
                <p className="w-48">Owner</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  {restaurant.usersRestaurant?.owner.fullname}
                </p>
              </div>
              <div className="flex">
                <p className="w-48">Restaurant Name</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  {restaurant.usersRestaurant?.name}
                </p>
              </div>
              <div className="flex">
                <p className="w-48">Cuisine Type</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  {restaurant.usersRestaurant?.cuisineType}
                </p>
              </div>
              <div className="flex">
                <p className="w-48">Opening Hours</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  {restaurant.usersRestaurant?.openingHours
                    ? restaurant.usersRestaurant.openingHours
                    : "12pm - 12am"}
                </p>
              </div>
              <div className="flex">
                <p className="w-48">Status</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  {restaurant.usersRestaurant?.open ? (
                    <span className="px-5 py-2 rounded-full bg-green-400">
                      Open
                      
                    </span>
                  ) : (
                    <span className="px-5 py-2 rounded-full bg-red-400">Closed</span>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Address </span>}
            />
          </Card>
          <CardContent>
            <div className="space-y-4 text-gray-200">
              <div className="flex">
                <p className="w-48">Country</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  India
                </p>
              </div>
              <div className="flex">
                <p className="w-48">City</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  Om Dalbhanjan
                </p>
              </div>
              <div className="flex">
                <p className="w-48">PinCode</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  dkjbkcsdj
                </p>
              </div>
              <div className="flex">
                <p className="w-48">Street Address</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  Om Dalbhanjan
                </p>
              </div>
            </div>
          </CardContent>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Contact</span>}
            />
          </Card>
          <CardContent>
            <div className="space-y-4 text-gray-200">
              <div className="flex">
                <p className="w-48">Email</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  {restaurant.usersRestaurant?.contactInformation.email}
                </p>
              </div>
              <div className="flex">
                <p className="w-48">Mobile</p>
                <p className="text-gray-400">
                  <span className="pr-5">-</span>
                  {restaurant.usersRestaurant?.contactInformation.mobile}
                </p>
              </div>
              <div className="flex">
                <p className="w-48">Social</p>
                <div>
                  <span className="pr-5">-</span>
                  <a href={restaurant.usersRestaurant?.contactInformation.instagram}>
                    <InstagramIcon sx={{ fontSize: "3rem" }} />
                  </a>
                  <a href="/">
                    <WhatsAppIcon sx={{ fontSize: "3rem" }} />
                  </a>{" "}
                  <a href="/">
                    <TwitterIcon sx={{ fontSize: "3rem" }} />
                  </a>{" "}
                  <a href="/">
                    <FacebookIcon sx={{ fontSize: "3rem" }} />
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
