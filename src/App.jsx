import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./components/Home/Home";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import CustomerRouter from "./Routers/CustomerRouter";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./components/State/store";
import { getUser } from "./components/State/Authencation/Action";
import { findCart } from "./components/State/Cart/Action";
import Routers from "./Routers/Routers";
import Routerss from "./Routers/Routers";
import { getAllRestaurantsAction, getRestaurantByUserId } from "./components/State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt))
  }, [auth.jwt]);

  useEffect(()=>{
      dispatch(getRestaurantByUserId(auth.jwt || jwt))
   
  },[auth.user])
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
