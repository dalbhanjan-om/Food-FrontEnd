import React from 'react';

import { Grid } from '@mui/material';
import IngredientCategoryTable from './IngredientCategoryTable';
import IngredientTable from './IngredienTable';

const Ingredients = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Grid container spacing={2} alignItems="stretch">
        {/* Left Table */}
        <Grid item xs={12} md={6}>
          <div style={{ height: '100%' }}>
            <IngredientTable />


          </div>
        </Grid>

        {/* Right Table */}
        <Grid item xs={12} md={6}>
          <div style={{ height: '100%' }}>
            <IngredientCategoryTable />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ingredients;
