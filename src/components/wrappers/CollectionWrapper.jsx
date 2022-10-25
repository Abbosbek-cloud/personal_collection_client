import { Grid } from "@mui/material";
import React from "react";
import CollectionCard from "../cards/CollectionCard";

const CollectionWrapper = ({ data = null }) => {
  return (
    <Grid container spacing={2}>
      {data
        ? data?.map((item) => (
            <Grid key={item?._id} item xs={12} sm={6} md={4} lg={3}>
              <CollectionCard {...item} />
            </Grid>
          ))
        : undefined}
    </Grid>
  );
};

export default CollectionWrapper;
