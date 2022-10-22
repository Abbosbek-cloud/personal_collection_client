import { Box, List, Paper } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

import SideBarItems from "../../components/SideBarItems";

const SideBar = (props) => {
  return (
    <Paper elevation={3} sx={{ py: 2 }}>
      <SideBarItems {...props.items} />
    </Paper>
  );
};

export default SideBar;
