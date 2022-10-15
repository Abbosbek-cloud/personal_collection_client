import Navbar from "./app/Navbar";
import React, { Fragment } from "react";
import Footer from "./app/Footer";
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const AppLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Box sx={{ minHeight: "50vh" }}>{props.children}</Box>
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
