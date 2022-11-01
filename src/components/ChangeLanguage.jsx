import React from "react";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import cookies from "js-cookie";
import languages from "../i-18/resources";
import i18next from "i18next";

const ChangeLanguage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const isOpen = Boolean(anchorEl);
  const dispatchers = (code) => {
    i18next.changeLanguage(code);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Change Language">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={isOpen ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={`/assets/flags/${currentLanguageCode}.png`}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {languages?.map((lang) => (
          <MenuItem key={lang.id} onClick={() => dispatchers(lang.code)}>
            <Avatar src={`/assets/flags/${lang.code}.png`} alt="Menyu tili" />{" "}
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ChangeLanguage;
