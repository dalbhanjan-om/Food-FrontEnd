import React, { useEffect } from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../State/Restaurant/Action";
import { store } from "../State/store";
import { useNavigate } from "react-router-dom";
import { findCart } from "../State/Cart/Action";

export default function () {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const navigate = useNavigate();
  console.log("rest", restaurant.restaurants);
  useEffect(() => {
    dispatch(getAllRestaurantsAction(jwt));
  }, []);

  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">QuickEats</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Taste the Convenience On Your FingerTips
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>

        <div className="fadout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Top Meals
        </p>
        <MultiItemCarousel />
      </section>

      <section className="px-5 lg:px-20 pt-5">
        <h1 className="text-2xl font-semibold text-gray-400 pb-10">
          Order From Most Rated Restaurants
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurant.restaurants.length > 0 ? (
            restaurant.restaurants.map((item) => (
              <RestaurantCard key={item.id} item={item} />
            ))
          ) : (
            <div
            className="w-full max-w-4xl p-6 rounded-lg shadow-lg text-center mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => navigate("/account/login")}
            style={{ cursor: "pointer" }}
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-red-500">
              Login to See Restaurants
            </h2>
            <p className="text-gray-400 mt-3 text-sm lg:text-base">
              Discover the best-rated restaurants and enjoy a delightful meal!
            </p>
            <button className="mt-5 px-6 py-3 bg-red-500 text-black font-bold rounded-lg hover:bg-red-600 transition-colors duration-200">
              Login
            </button>
          </div>
          
          )}
        </div>
      </section>
    </div>
  );
}
