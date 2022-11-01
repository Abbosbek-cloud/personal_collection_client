import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material";
import DrawerComponent from "./Drawer";
import { pagesArr } from "./navigationList";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../../components/ChangeLanguage";
import MenuWithUser from "../../components/MenuWithUser";
import MenuWithOutUser from "../../components/MenuWithOut";
import HearderSearch from "../../components/HearderSearch";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const { t } = useTranslation();

  const toggleNavbar = (isOpen) => (e) => {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setOpen(isOpen);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Link to="/">
            <Avatar
              src="/assets/favicon-32x32.png"
              alt="logo"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleNavbar(true)}
              color="inherit"
              sx={{ p: 0, fontSize: "30px" }}
            >
              <MenuIcon />
            </IconButton>
            <DrawerComponent
              open={open}
              toggleDrawer={toggleNavbar}
              pages={pagesArr}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <ChangeLanguage />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pagesArr.map((page) => (
              <Button
                key={page.id}
                onClick={() => navigate(page.url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {t(page.name)}
              </Button>
            ))}

            <ChangeLanguage />
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <HearderSearch />
            {user ? <MenuWithUser /> : <MenuWithOutUser />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
