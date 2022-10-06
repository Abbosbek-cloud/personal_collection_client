import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { alpha, Box, Button, ButtonBase, styled } from "@mui/material";
import { Paragraph, Span } from "../../components/Typography";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { FlexRowCenter } from "../../components/flex-box";

export const BodyWrapper = styled(Box)(({ theme, compact }) => ({
  transition: "margin-left 0.3s",
  marginLeft: compact ? "86px" : "280px",
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0,
  },
}));

export const InnerWrapper = styled(Box)(({ theme }) => ({
  transition: "all 0.3s",
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1200,
    margin: "auto",
  },
  [theme.breakpoints.down(1550)]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

export const SidebarWrapper = styled(Box)(({ theme, compact }) => ({
  height: "100vh",
  position: "fixed",
  width: compact ? 86 : 280,
  transition: "all .2s ease",
  zIndex: theme.zIndex.drawer,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900],
  "&:hover": compact && {
    width: 280,
  },
}));

export const NavWrapper = styled(Box)(() => ({
  height: "100%",
  paddingLeft: 16,
  paddingRight: 16,
}));

export const NavItemButton = styled(ButtonBase)(({ theme, active }) => ({
  height: 44,
  width: "100%",
  borderRadius: 8,
  marginBottom: 4,
  padding: "0 12px 0 16px",
  justifyContent: "flex-start",
  transition: "all 0.15s ease",
  ...(active && {
    color: theme.palette.info.main,
    backgroundColor: alpha(theme.palette.grey[800], 0.6),
    "& .MuiSvgIcon-root .secondary": {
      color: theme.palette.info.main,
      opacity: 1,
    },
  }),
}));

export const ListLabel = styled(Paragraph)(({ compact }) => ({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "20px",
  marginLeft: "15px",
  marginBottom: "10px",
  textTransform: "uppercase",
  transition: "all 0.15s ease",
  ...(compact && {
    opacity: 0,
    width: 0,
  }),
}));

export const ListIconWrapper = styled(Box)(({ theme }) => ({
  width: 22,
  height: 22,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  marginRight: "0.8rem",
  justifyContent: "center",
  "& svg": {
    width: "100%",
    height: "100%",
    color: theme.palette.text.disabled,
  },
}));

export const ExternalLink = styled("a")(() => ({
  overflow: "hidden",
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none",
}));
export const StyledText = styled(Span)(({ compact }) => ({
  whiteSpace: "nowrap",
  transition: "all 0.15s ease",
  ...(compact && {
    opacity: 0,
    width: 0,
  }),
}));

export const BulletIcon = styled("div")(({ theme, active }) => ({
  width: 3,
  height: 3,
  marginLeft: "10px",
  overflow: "hidden",
  borderRadius: "50%",
  marginRight: "1.3rem",
  background: active ? theme.palette.info.main : theme.palette.common.white,
  boxShadow: active
    ? `0px 0px 0px 4px ${alpha(theme.palette.info[500], 0.2)}`
    : "none",
}));

export const BadgeValue = styled(Box)(({ compact }) => ({
  padding: "1px 8px",
  overflow: "hidden",
  borderRadius: "300px",
  display: compact ? "none" : "unset",
}));

export const ChevronLeftIcon = styled(ChevronLeft)(
  ({ compact, sidebarcompact }) => ({
    color: "white",
    cursor: "pointer",
    transition: "transform 0.3s",
    display: compact ? "none" : "block",
    transform: sidebarcompact ? "rotate(180deg)" : "rotate(0deg)",
  })
);

export const ChevronRightIcon = styled(ChevronRight)(
  ({ collapsed, compact, theme: { direction } }) => ({
    fontSize: 18,
    color: "white",
    transform: collapsed ? "0deg" : "rotate(90deg)",
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    ...(compact && {
      display: "none",
      width: 0,
    }),
    ...(collapsed &&
      direction === "rtl" && {
        transform: "rotate(180deg)",
      }),
  })
);

export const Wrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "inherit",
  position: "fixed",
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  zIndex: theme.zIndex.drawer + 3,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900],
}));

export const NavExpandRoot = styled(Box)(() => ({
  "& .subMenu": {
    padding: 0,
  },
  "& .navItem": {
    background: "transparent",
  },
  "& .expansion-panel": {
    "& .expansion-panel": {
      paddingLeft: 8,
    },
    overflow: "hidden",
    transition: "max-height 0.3s cubic-bezier(0, 0, 0.2, 1)",
  },
}));

export const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[2],
  color: theme.palette.text.primary,
}));

export const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

export const ToggleWrapper = styled(FlexRowCenter)(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  minHeight: 40,
  flexShrink: 0,
  marginLeft: 16,
  padding: "0 20px",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: 200,
  padding: "5px 10px",
  borderRadius: "8px",
  color: theme.palette.grey[500],
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Divider = styled(Box)(({ theme }) => ({
  margin: "0.5rem 0",
  border: `1px dashed ${theme.palette.grey[200]}`,
}));
