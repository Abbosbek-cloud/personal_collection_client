import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import { FlexBetween } from "../../components/flex-box";
import Scrollbar from "../../components/Scrollbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LayoutDrawer from "./LayoutDrawer";
import {
  BadgeValue,
  BulletIcon,
  ChevronLeftIcon,
  ExternalLink,
  ListIconWrapper,
  ListLabel,
  NavItemButton,
  NavWrapper,
  SidebarWrapper,
  StyledText,
} from "../styled/Components";
import { navigations } from "./navigation/NavList";
import SidebarAccordion from "./SideBarAccordion";

const TOP_HEADER_AREA = 70;

const DashboardSidebar = (props) => {
  const {
    sidebarCompact,
    showMobileSideBar,
    setShowMobileSideBar,
    setSidebarCompact,
  } = props;

  const navigate = useNavigate();
  const [onHover, setOnHover] = useState(false);
  const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg")); // side hover when side bar is compacted
  const { pathname } = useLocation();
  const COMPACT = sidebarCompact && !onHover ? 1 : 0; // handle active current page

  const activeRoute = (path) => (pathname === path ? 1 : 0); // handle navigate to another route and close sidebar drawer in mobile device

  const handleNavigation = (path) => {
    navigate(path);
    setShowMobileSideBar();
  };

  const renderLevels = (data) => {
    return data.map((item, index) => {
      if (item.type === "label")
        return (
          <ListLabel key={index} compact={COMPACT}>
            {item.label}
          </ListLabel>
        );

      if (item.children) {
        return (
          <SidebarAccordion key={index} item={item} sidebarCompact={COMPACT}>
            {renderLevels(item.children)}
          </SidebarAccordion>
        );
      } else if (item.type === "extLink") {
        return (
          <ExternalLink
            key={index}
            href={item.path}
            rel="noopener noreferrer"
            target="_blank"
          >
            <NavItemButton key={item.name} name="child" active={0}>
              {item.icon ? (
                <ListIconWrapper>
                  <item.icon />
                </ListIconWrapper>
              ) : (
                <span className="item-icon icon-text">{item.iconText}</span>
              )}

              <StyledText compact={COMPACT}>{item.name}</StyledText>

              {/* <Box mx="auto" /> */}

              {item.badge && (
                <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue>
              )}
            </NavItemButton>
          </ExternalLink>
        );
      } else {
        return (
          <Box key={index}>
            <NavItemButton
              key={item.name}
              className="navItem"
              active={activeRoute(item.path)}
              onClick={() => handleNavigation(item.path)}
            >
              {item?.icon ? (
                <ListIconWrapper>
                  <item.icon />
                </ListIconWrapper>
              ) : (
                <BulletIcon active={activeRoute(item.path)} />
              )}

              <StyledText compact={COMPACT}>{item.name}</StyledText>

              {/* <Box mx="auto" /> */}

              {item.badge && (
                <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue>
              )}
            </NavItemButton>
          </Box>
        );
      }
    });
  };

  const content = (
    <Scrollbar
      autoHide
      clickOnTrack={false}
      sx={{
        overflowX: "hidden",
        maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
      }}
    >
      <NavWrapper compact={sidebarCompact}>
        {renderLevels(navigations)}
      </NavWrapper>
    </Scrollbar>
  );

  if (downLg) {
    return (
      <LayoutDrawer open={showMobileSideBar} onClose={setShowMobileSideBar}>
        <Box p={2} maxHeight={TOP_HEADER_AREA}>
          <img
            alt="Logo"
            width="auto"
            height={24}
            src="/assets/favicon-32x32.png"
            style={{
              marginLeft: 8,
            }}
          />
        </Box>

        {content}
      </LayoutDrawer>
    );
  }

  return (
    <SidebarWrapper
      compact={sidebarCompact}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => sidebarCompact && setOnHover(false)}
    >
      <FlexBetween
        p={2}
        maxHeight={TOP_HEADER_AREA}
        justifyContent={COMPACT ? "center" : "space-between"}
      >
        <Avatar
          src={
            COMPACT ? "/assets/favicon-32x32.png" : "/assets/favicon-32x32.png"
          }
          sx={{
            borderRadius: 0,
            width: "auto",
            height: 24,
            marginLeft: COMPACT ? 0 : 1,
          }}
        />
      </FlexBetween>

      {content}
    </SidebarWrapper>
  );
};

export default DashboardSidebar;
