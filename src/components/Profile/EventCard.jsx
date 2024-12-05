import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <Card sx={{width:300}}>
      <CardMedia 
      sx={{height:300}} 
      image="https://cdn.pixabay.com/photo/2017/08/07/20/16/food-2607398_1280.jpg" />
      <CardContent>
        <Typography variant="h5">
            Desert Festival 
        </Typography>
        <Typography variant="body2">
            50% off on first order
        </Typography>
        <div className="py-2 space-y-2">
            <p>{"Pune"}</p>
            <p className="text-sm text-blue-500">Starts On:12pm,14 Feb 2024</p>
            <p className="text-sm text-red-500">Till:9pm,15 feb 2024</p>

        </div>
      </CardContent>
     {
        false &&  <CardActions>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
      </CardActions>
     }
    </Card>
  );
};

export default EventCard;
