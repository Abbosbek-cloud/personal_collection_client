import { Box, ClickAwayListener, Drawer } from "@mui/material";
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
      <SideBarItems {...items} />
    </Box>
  );
  return (
    <ClickAwayListener onClickAway={toggleDrawer}>
      <Drawer anchor="left" open={open} onOpen={toggleDrawer(true)}>
        {list()}
      </Drawer>
    </ClickAwayListener>
  );
};

export default SideBarDrawer;
