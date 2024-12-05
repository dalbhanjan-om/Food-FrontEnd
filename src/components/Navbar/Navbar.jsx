import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../State/Authencation/Action";


export default function Navbar() {
  const {auth,cart}=useSelector(store=>store)
  const navigate=useNavigate()


 
   const handleAvatarClick=()=>{
    if(auth.user?.role==="ROLE_CUSTOMER"){
      navigate("/my-profile/")
    }
    else{
        navigate("/admin/restaurant")
    }
   }

  return (
    <Box  className="px-5 sticky top-0 z-[50] py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li onClick={()=>navigate("/")} className="logo font-semibold text-gray-100 text-2xl">QuickEats</li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className=" cursor-pointer">
         { auth.user?
           <Avatar onClick={handleAvatarClick} sx={{bgcolor:"white",color:pink.A400}}>{auth.user?.fullname[0].toUpperCase()}</Avatar>
           :<IconButton onClick={()=>navigate("/account/login")}>
                   
          <Typography variant="body2" color="textPrimary">
            Login
          </Typography>
           </IconButton>
         }

        </div>
        <div className="">
          <IconButton onClick={()=>navigate("/cart")}>
            <Badge color="primary" badgeContent={cart.cart?.items.length}>
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
           
          </IconButton>
        </div>
      



        </div>
        
    </Box>
  );
}
