import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import ExtensionIcon from "@mui/icons-material/Extension";
import Logout from "../../components/icons/duotone/Logout";
import UserProfile from "../../components/icons/duotone/UserProfile";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useLocation, useNavigate } from "react-router-dom";

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

const StyledNavList = styled(List)({
  "&.active": {
    backgroundColor: "#bbdefb",
  },
  "&:hover": {
    "&": {
      backgroundColor: "#f3e5f5",
    },
  },
});

const SideBar = ({
  img = "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  name = "Abbosbek",
  username = "Abek_dev",
}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);
  return (
    <Paper elevation={3} sx={{ py: 2 }}>
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
          <ListItemButton onClick={() => navigate("/user/profile")}>
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
          <ListItemButton onClick={() => navigate("/user/collections")}>
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
          <ListItemButton onClick={() => navigate("/user/items")}>
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText primary={t("items")} />
          </ListItemButton>
        </StyledNavList>
        <StyledNavList disablePadding>
          <ListItemButton onClick={() => navigate("/user/items")}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={t("logout")} />
          </ListItemButton>
        </StyledNavList>
      </List>
    </Paper>
  );
};

export default SideBar;
