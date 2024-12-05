import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Divider, FormControl, RadioGroup, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../State/Restaurant/Action";
import { getMenuItemsByRestaurantId } from "../State/Menu/Action";

const foodTypes = [
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "Vegetrain only",
    value: "vegetarian",
  },
  {
    label: "Non-veg",
    value: "non_vegetarian",
  },
  {
    label: "Seasonal",
    value: "seasonal",
  },
];

const menu1 = [1, 2, 3, 4, , 4, 4, 54, 3];

const RestaurantDetails = () => {
  const [foodType, setfoodType] = useState("All");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant, menu } = useSelector((store) => store);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { id, city } = useParams();

  const handleFilter = (e) => {
    setfoodType(e.target.value)
    console.log(e.target.value);
  };
  const handleFilterCategory = (e) => {
    const value = e.target.value; // Extract value from the event
    setSelectedCategory(value); // Update state
    console.log("Selected category:", value);
  };
  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantId: id }));
    dispatch(getRestaurantsCategory({ jwt, restaurantId: id }));
  }, []);

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        jwt,
        restaurantId: id,
        vegetarian: foodType==="vegetarian",
        nonveg: foodType==="non_vegetarian",
        seasonal:foodType==="seasonal",
        foodCategory:selectedCategory,
      })
    );
  }, [selectedCategory,foodType]);
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3>Home/India/Chinese Restaurant/3</h3>
        <div className="space-y-4">
          <div>
            <img
              className="w-full h-[40vh] object-cover"
              src={restaurant.restaurant?.images[0]}
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <img
              className="w-1/2 h-[40vh] object-cover"
              src={restaurant.restaurant?.images[1]}
              alt=""
            />
            <img
              className="w-1/2 h-[40vh] object-cover"
              src={restaurant.restaurant?.images[2]}
              alt=""
            />
          </div>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">
            {restaurant.restaurant?.name}
          </h1>
          <p className="text-gray-500 flex mt-1">
            {restaurant.restaurant?.description}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>
                {restaurant.restaurant?.address.city},
                {restaurant.restaurant?.address.state}
              </span>
            </p>
            <p className="text-gray-500 flex items-center gap-3 pt-2">
              <CalendarTodayIcon />
              <span>{restaurant.restaurant?.openingHours}</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilterCategory} // Attach updated handler
                  name="food_category"
                  value={selectedCategory} // Bind state to selected value
                >
                  {restaurant.categories.map((item) => (
                    <FormControlLabel
                      key={item.name}
                      value={item.name} // Ensure value matches the item's name
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%]  lg:pl-10 ">
          {menu.menuItems.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
