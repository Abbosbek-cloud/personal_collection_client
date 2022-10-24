import { Grid } from "@mui/material";
import React from "react";
import ReactQuill from "../../components/ReactQuill";

const PerItem = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ReactQuill
          name="description"
          placeholder="Mahsulot haqida"
          theme="snow"
          value={values.description}
          onChange={(data) => setFieldValue("description", data)}
          sx={{ height: 400 }}
        />
      </Grid>
    </Grid>
  );
};

export default PerItem;
