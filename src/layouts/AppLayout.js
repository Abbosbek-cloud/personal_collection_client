import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Sticky from "../components/sticky/Sticky";
import Topbar from "../components/topbar/Topbar";
import React, { Fragment, useCallback, useEffect, useState } from "react";

const AppLayout = (props) => {
  // props
  const { children, showNavbar = true, title = "Personal Collections" } = props; // app states

  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Fragment>
      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} searchBoxType="type2" />
      </Sticky>

      <Box
        zIndex={1}
        position="relative"
        className="section-after-sticky"
        sx={{
          display: showNavbar ? "block" : "none",
        }}
      >
        <Navbar />
      </Box>

      <Box
        position="relative"
        sx={{
          background: "#fff",
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
};

export default AppLayout;
