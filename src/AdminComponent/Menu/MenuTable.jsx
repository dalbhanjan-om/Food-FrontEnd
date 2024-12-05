import { Avatar, Box, Card, CardHeader, Chip, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodAction, getMenuItemsByRestaurantId } from "../../components/State/Menu/Action";

const rows = [1, 2, 2, 3];
const MenuTable = () => {
  const dispatch=useDispatch()

  const jwt=localStorage.getItem('jwt')
  const{restaurant,ingredients,menu}=useSelector(store=>store)
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(getMenuItemsByRestaurantId({
      restaurantId:restaurant.usersRestaurant.id,
      jwt:localStorage.getItem("jwt"),
      vegetarian:true,
      nonveg:false,
      seasonal:false,
      foodCategory:""

    }))
  },[])
  const handleDeleteFood=(foodId)=>{
    dispatch(deleteFoodAction({
      foodId
    }))
  }
  console.log("menu items,",menu)

  return (
    <Box>
      <Card>
        <CardHeader
          action={
            <IconButton style={{ pointerEvents: "auto", zIndex: 10 }}
            onClick={()=>navigate("/admin/restaurant/add-menu") }>
              <CreateIcon />
            </IconButton>
          }
          title={"Menu"}
          sx={{ pt: 2, alignItems: "center" }}
        ></CardHeader>
      </Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Price</TableCell>

              <TableCell align="right">Avaliabilty</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menu.menuItems.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left"><Avatar src={item.images[0]}></Avatar></TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.ingredients.map((ingredient)=><Chip label={ingredient.name}></Chip>)
                  }</TableCell>
                <TableCell align="right">₹{item.price}</TableCell>
                <TableCell align="right">{item.available?"In Stock":"Out of Stock"}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary" onClick={()=>handleDeleteFood(item.id)}><Delete/></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MenuTable;
