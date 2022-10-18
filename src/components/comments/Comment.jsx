import { Avatar, Grid, Paper } from "@mui/material";
import React from "react";

const Comment = () => {
  return (
    <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
            Suspendisse congue vulputate lobortis. Pellentesque at interdum
            tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis
            ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus,
            efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque
            et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum,
            mauris mi vehicula urna, nec feugiat quam lectus vitae ex.{" "}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
            posted 1 minute ago
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Comment;
