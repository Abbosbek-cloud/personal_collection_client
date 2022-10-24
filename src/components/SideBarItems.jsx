import React from "react";
import { useTranslation } from "react-i18next";
import {
  Skeleton,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  List,
} from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/styles";

import UserProfile from "./icons/duotone/UserProfile";
import Logout from "./icons/duotone/Logout";

const StyledImgBox = styled(Box)({
  width: "120px",
  marginInline: "auto",
  height: "120px",
  borderRadius: "50%",
});

const StyledInfo = styled(Box)({
  width: "80%",
  marginInline: "auto",
});

const StyledNavList = styled(ListItem)({
  "&.active": {
    backgroundColor: "#bbdefb",
  },
  "&:hover": {
    "&": {
      backgroundColor: "#f3e5f5",
    },
  },
});

const SideBarItems = ({ name, img, username, toggleDrawer }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <StyledImgBox>
        {name ? (
          <img
            src={img}
            alt={name}
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        ) : (
          <Skeleton
            variant="circle"
            sx={{ width: "100%", height: "100%", mx: "auto", my: 1 }}
          />
        )}
      </StyledImgBox>
      {name && username ? (
        <StyledInfo>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 600, textAlign: "center" }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 600,
              color: "#dddd",
              textAlign: "center",
            }}
          >
            {username}
          </Typography>
        </StyledInfo>
      ) : (
        <Skeleton
          variant="rectangular"
          sx={{ width: "80%", marginInline: "auto", height: "40px" }}
        />
      )}
      <List>
        <StyledNavList
          disablePadding
          className={pathname === "/user/profile" ? "active" : ""}
        >
          <ListItemButton
            onClick={() => {
              navigate("/user/profile");
              toggleDrawer(false);
            }}
          >
            <ListItemIcon>
              <UserProfile />
            </ListItemIcon>
            <ListItemText primary={t("profile")} />
          </ListItemButton>
        </StyledNavList>
        <StyledNavList
          disablePadding
          className={pathname === "/user/collections" ? "active" : ""}
        >
          <ListItemButton
            onClick={() => {
              navigate("/user/collections");
              toggleDrawer(false);
            }}
          >
            <ListItemIcon>
              <PermMediaIcon />
            </ListItemIcon>
            <ListItemText primary={t("collections")} />
          </ListItemButton>
        </StyledNavList>
        <StyledNavList
          disablePadding
          className={pathname === "/user/items" ? "active" : ""}
        >
          <ListItemButton
            onClick={() => {
              navigate("/user/items");
              toggleDrawer(false);
            }}
          >
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText primary={t("items")} />
          </ListItemButton>
        </StyledNavList>
        <StyledNavList disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/user/items");
              toggleDrawer(false);
            }}
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={t("logout")} />
          </ListItemButton>
        </StyledNavList>
      </List>
    </React.Fragment>
  );
};

export default SideBarItems;
