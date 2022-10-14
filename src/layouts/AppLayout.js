import Header from "./app/Header";
import Navbar from "./app/Navbar";
import React, { Fragment } from "react";
import Footer from "./app/Footer";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const AppLayout = (props) => {
  const { pathname } = useLocation();

  const displayHeader = () => {
    if (!pathname.includes("/login") || !pathname.includes("/signup")) {
      return "";
    } else {
      return <Header />;
    }
  };

  return (
    <Fragment>
      <Navbar />
      {displayHeader()}
      <Container sx={{ minHeight: "50vh" }}>{props.children}</Container>
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
