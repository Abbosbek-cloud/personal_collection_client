import { Box, styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BadgeValue,
  BulletIcon,
  ChevronRightIcon,
  ListIconWrapper,
  NavExpandRoot,
  NavItemButton,
  StyledText,
} from "../../styled/Components";

const SidebarAccordion = (props) => {
  const { item, children, sidebarCompact } = props;
  const { name, icon, iconText, badge } = item;
  const path = useLocation().pathname;
  const componentHeight = useRef(0);
  const elementRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [hasActive, setHasActive] = useState(false);

  const handleClick = () => {
    componentHeight.current = 0;
    calcaulateHeight(elementRef.current);
    setCollapsed(!collapsed);
  };

  const calcaulateHeight = useCallback((node) => {
    if (node.name !== "child") {
      for (let child of node.children) {
        calcaulateHeight(child);
      }
    }

    if (node.name === "child") componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44; //here 44 is node height

    return;
  }, []);
  useEffect(() => {
    if (!elementRef) return;
    calcaulateHeight(elementRef.current); // OPEN DROPDOWN IF CHILD IS ACTIVE

    for (let child of item.children) {
      if (child.path === path) {
        setCollapsed(true);
        setHasActive(true);
      }
    }

    return () => {
      setHasActive(false);
      setCollapsed(false);
    };
  }, [calcaulateHeight, item.children, path]);

  return (
    <NavExpandRoot className="subMenu">
      <NavItemButton
        onClick={handleClick}
        active={hasActive ? 1 : 0}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center">
          {/* //@ts-ignore */}
          {icon && (
            <ListIconWrapper>
              <item.icon />
            </ListIconWrapper>
          )}
          {iconText && <BulletIcon active={hasActive ? 1 : 0} />}
          <StyledText compact={sidebarCompact}>{name}</StyledText>
        </Box>

        {badge && (
          <BadgeValue compact={sidebarCompact} className="itemIcon">
            {badge.value}
          </BadgeValue>
        )}

        <ChevronRightIcon
          color="disabled"
          compact={sidebarCompact}
          className="accordionArrow"
          collapsed={collapsed ? 1 : 0}
        />
      </NavItemButton>

      <div
        ref={elementRef}
        className="expansion-panel"
        style={{
          maxHeight:
            !collapsed || sidebarCompact
              ? "0px"
              : componentHeight.current + "px",
        }}
      >
        {children}
      </div>
    </NavExpandRoot>
  );
};

export default SidebarAccordion;
