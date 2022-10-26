import { Grid } from "@mui/material";
import React from "react";

const CreateCollection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={6}></Grid>
      <Grid item xs={12} sm={8} md={6}></Grid>
    </Grid>
  );
};

export default CreateCollection;
