import { Grid } from "@mui/material";
import React from "react";
import ItemCard from "../cards/ItemCard";

const ItemWrapper = ({ data = null }) => {
  return (
    <Grid container spacing={2}>
      {data
        ? data?.map(() => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ItemCard />
            </Grid>
          ))
        : undefined}
    </Grid>
  );
};

export default ItemWrapper;
