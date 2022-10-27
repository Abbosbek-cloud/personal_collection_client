import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material";
import DrawerComponent from "./Drawer";
import { pagesArr } from "./navigationList";
import { useNavigate, Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import languages from "../../i-18/resources";

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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const { t } = useTranslation();

  const currentLanguageCode = cookies.get("i18next") || "uz";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatchers = (code) => {
    i18next.changeLanguage(code);
  };

  const settings = [
    { path: user ? "/user/profile" : "/signup", page: t("profile") },
    {
      path: user ? "/user/collections" : "/collections",
      page: t("Collections"),
    },
    { path: user ? "/user/items" : "/items", page: t("items") },
  ];

  const toggleNavbar = (isOpen) => (e) => {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setOpen(isOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (path) => {
    setAnchorElUser(null);
    path ? navigate(path) : null;
  };

  const handleCloseProfile = () => {
    localStorage.clear();
    setAnchorElUser(null);
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
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
            >
              <MenuIcon />
            </IconButton>
            <DrawerComponent
              open={open}
              toggleDrawer={toggleNavbar}
              pages={pagesArr}
            />
          </Box>
          <Avatar
            src="/assets/favicon-32x32.png"
            alt="logo"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

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
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
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
                  <Avatar
                    src={`/assets/flags/${lang.code}.png`}
                    alt="Menyu tili"
                  />{" "}
                  {lang.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Search sx={{ marginRight: "10px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={t("search")}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Tooltip title={t("settingsOpen")}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user ? user?.name : "A"}
                  src={user ? user?.avatar : ""}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.page}
                  onClick={() => handleCloseUserMenu(setting.path)}
                >
                  <Typography textAlign="center">{setting.page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseProfile}>
                <Typography textAlign="center">{t("logout")}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
