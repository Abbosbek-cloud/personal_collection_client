import { Box, Button, Card, Container } from "@mui/material";
import { compose, display, spacing, styled } from "@mui/system";
import { layoutConstant } from "../../utils/constants";
import { slideDown } from "../../animations/keyframes";
import NavLink from "../nav-link/NavLink";

export const TopbarWrapper = styled(Box)(({ theme }) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none",
      },
    },
  },
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .smallRoundedImage": {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
}));

export const StyledBox = styled(
  ({ children, componentHeight, fixedOn, fixed, ...rest }) => (
    <div {...rest}>{children}</div>
  )
)(({ theme, componentHeight, fixedOn, fixed }) => ({
  "& .hold": {
    zIndex: 2,
    boxShadow: "none",
    position: "relative",
  },
  "& .fixed": {
    left: 0,
    right: 0,
    zIndex: 1500,
    position: "fixed",
    top: `${fixedOn}px`,
    boxShadow: theme.shadows[2],
    transition: "all 350ms ease-in-out",
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
  },
  "& + .section-after-sticky": {
    paddingTop: fixed ? componentHeight : 0,
  },
}));

export const BazarButton = styled(Button)({
  minWidth: 0,
  minHeight: 0,
});

export const navLinkStyle = {
  cursor: "pointer",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  "&:last-child": {
    marginRight: "0",
  },
}; // style components

export const StyledNavLink = styled(NavLink)(() => ({ ...navLinkStyle }));

export const ParentNav = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& > .parent-nav-item": {
      display: "block",
    },
  },
}));

export const ParentNavItem = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 5,
  left: "100%",
  display: "none",
  position: "absolute",
  [theme.breakpoints.down(1640)]: {
    right: "100%",
    left: "auto",
  },
}));

export const BazarCard = styled(({ hoverEffect, children, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, hoverEffect }) => ({
  borderRadius: "8px",
  overflow: "unset",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: hoverEffect ? theme.shadows[3] : "",
  },
}));

BazarCard.defaultProps = {
  hoverEffect: false,
};

export const NavBarWrapper = styled(BazarCard)(({ theme, line }) => ({
  height: "60px",
  display: "block",
  borderRadius: "0px",
  position: "relative",
  ...(line === 0 && {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  }),
  [theme.breakpoints.down(1150)]: {
    display: "none",
  },
}));

export const InnerContainer = styled(Container)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const CategoryMenuButton = styled(BazarButton)(({ theme }) => ({
  px: "1rem",
  width: "278px",
  height: "40px",
  backgroundColor: theme.palette.grey[100],
}));

export const ChildNavsWrapper = styled(Box)(() => ({
  left: "50%",
  zIndex: 5,
  top: "100%",
  display: "none",
  position: "absolute",
  transform: "translate(-50%, 0%)",
}));

const GeneralImage = styled("img")(compose(spacing, display));

GeneralImage.defaultProps = {
  display: "block",
};

export default GeneralImage;
