import Menu from "@mui/icons-material/Menu";
import { Box, Divider, IconButton, Typography, Button } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

const StyledWrapper = styled(Box)({
  padding: "10px 20px",
  display: "flex",
});

const UserSections = ({
  header,
  children,
  menu = null,
  handleDrawer,
  button,
  onClick,
  buttonText,
}) => {
  return (
    <Box component="div">
      <StyledWrapper
        sx={{
          justifyContent: menu ? "flex-end" : button ? "space-between" : "",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {header}
        </Typography>
        {menu ? (
          <IconButton onClick={handleDrawer(true)}>
            <Menu />
          </IconButton>
        ) : undefined}
        {button ? (
          <Button variant="contained" onClick={onClick}>
            {buttonText}
          </Button>
        ) : undefined}
      </StyledWrapper>
      <Divider />
      <StyledWrapper sx={{ display: "block" }}>{children}</StyledWrapper>
    </Box>
  );
};

export default UserSections;
