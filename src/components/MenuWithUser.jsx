import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { getUserRoleRouteMenu } from "../utils/functions";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ListItemButton } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import CategoryIcon from "@mui/icons-material/Category";

export default function MenuWithUser() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleCloseProfile = () => {
    localStorage.clear();
    setAnchorEl(null);
    navigate("/");
  };

  const navigation = getUserRoleRouteMenu(user.role);
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title={t("settingsOpen")}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }}>
              A
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
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
        <MenuItem sx={{ p: 0 }}>
          <Link to={navigation} style={{ width: "100%" }}>
            <ListItemButton>
              <Avatar sx={{ width: "25px", height: "25px" }} /> {t("profile")}
            </ListItemButton>
          </Link>
        </MenuItem>
        <MenuItem sx={{ p: 0 }}>
          <Link to={navigation + "/collections"} style={{ width: "100%" }}>
            <ListItemButton>
              <ListItemIcon>
                <CollectionsIcon fontSize="small" />
              </ListItemIcon>
              {t("mycollections")}
            </ListItemButton>
          </Link>
        </MenuItem>
        <MenuItem sx={{ p: 0 }}>
          <Link to={navigation + "/items"} style={{ width: "100%" }}>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon fontSize="small" />
              </ListItemIcon>{" "}
              {t("myitems")}
            </ListItemButton>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ p: 0 }}>
          <ListItemButton onClick={handleCloseProfile}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {t("logout")}
          </ListItemButton>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
