import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import OrdersTable from './OrderTable';

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "ALL", value: "ALL" },
];

const Orders = () => {
  const [filterValue, setFilterValue] = useState("COMPLETED"); // Default to "COMPLETED"

  const handleFilter = (event) => {
    console.log("Selected value:", event.target.value); // Log value when changed
    setFilterValue(event.target.value);
  };

  return (
    <>
     {/* // <div className="px-2">
    //   <Card className="p-5" sx={{ padding: "20px" }}>
    //     <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
    //       Order Status
    //     </Typography>
    //     <FormControl className="py-10" component="fieldset">
    //       <RadioGroup
    //         row
    //         name="category"
    //         value={filterValue}
    //         onChange={handleFilter}
    //       >
    //         {orderStatus.map((item, index) => (
    //           <FormControlLabel
    //             key={index}
    //             value={item.value}
    //             control={<Radio />}
    //             label={item.label}
    //             sx={{ color: "black" }} // Change color to black for visibility
    //           />
    //         ))}
    //       </RadioGroup>
    //     </FormControl>
    //   </Card>
    // </div> */}
     <OrdersTable/>
    </>
  
  );
};

export default Orders;
