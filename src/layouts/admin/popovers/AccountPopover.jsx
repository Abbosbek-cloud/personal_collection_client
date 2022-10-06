import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material";
import { H6, Small } from "../../../components/Typography";
import { useState } from "react";
import { Divider } from "../../styled/Components";

const AccountPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  return (
    <Box>
      <IconButton
        sx={{
          padding: 0,
        }}
        aria-haspopup="true"
        onClick={handleClick}
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "account-menu" : undefined}
      >
        <Avatar alt="Remy Sharp" src="/assets/images/avatars/001-man.svg" />
      </IconButton>

      <Menu
        open={open}
        id="account-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            boxShadow: 2,
            minWidth: 200,
            borderRadius: "8px",
            overflow: "visible",
            border: "1px solid",
            borderColor: "grey.200",
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "grey.200",
            },
            "&:before": {
              top: 0,
              right: 14,
              zIndex: 0,
              width: 10,
              height: 10,
              content: '""',
              display: "block",
              position: "absolute",
              borderTop: "1px solid",
              borderLeft: "1px solid",
              borderColor: "grey.200",
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <Box px={2} pt={1}>
          <H6>Gage Paquette</H6>
          <Small color="grey.500">Admin</Small>
        </Box>

        <Divider />
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Orders</MenuItem>
        <MenuItem>Settings</MenuItem>

        <Divider />
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountPopover;
