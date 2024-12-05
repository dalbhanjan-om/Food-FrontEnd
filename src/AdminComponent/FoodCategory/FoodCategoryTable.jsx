import { Box, Button, Card, CardHeader, IconButton, Modal, Typography } from "@mui/material";
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
import CreateFoodCategoryForm from "./CreateFoodCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsCategory } from "../../components/State/Restaurant/Action";
import { fetchRestaurantsOrder } from "../../components/State/Restaurant Order/Action";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const rows = [1, 2, 2, 3];
const FoodCategoryTable = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch=useDispatch();
  
  const jwt=localStorage.getItem('jwt')

  useEffect(()=>{
    dispatch(getRestaurantsCategory({jwt,restaurantId:restaurant.usersRestaurant?.id}))
   
  

  },[])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setOpen(true);
   
  } 
  const handleClose = () => setOpen(false);
  
 
  return (
    <Box>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={handleOpen} aria-label="settings"   style={{ pointerEvents: "auto", zIndex: 10 }}>
              <CreateIcon />
            </IconButton>
          }
          title={"Food Category"}
          sx={{ pt: 2, alignItems: "center" }}
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurant.categories.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <CreateFoodCategoryForm/>
        </Box>
      </Modal>
    </Box>
  );
};

export default FoodCategoryTable;
