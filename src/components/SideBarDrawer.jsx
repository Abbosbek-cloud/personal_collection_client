import { Box, Drawer } from "@mui/material";
import React from "react";
import SideBarItems from "./SideBarItems";

const SideBarDrawer = ({ open, toggleDrawer, items }) => {
  const list = () => (
    <Box
      sx={{ width: 250, py: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <SideBarItems {...items} toggleDrawer={toggleDrawer} />
    </Box>
  );
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};

export default SideBarDrawer;
