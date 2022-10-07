import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowDown,
} from "@mui/icons-material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Box, Container, MenuItem, styled } from "@mui/material";
import BazarButton from "components/BazarButton";
import BazarCard from "components/BazarCard";
import CategoryMenu from "components/categories/CategoryMenu";
import { FlexBox } from "components/flex-box";
import Category from "components/icons/Category";
import { Paragraph } from "components/Typography";
import navbarNavigations from "data/navbarNavigations";
import useSettings from "../../hooks/useSettings";
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2"; // NavList props interface

// ==========================================================

// ==========================================================
const Navbar = ({ navListOpen, hideCategories, elevation }) => {
  const { settings } = useSettings();

  const renderNestedNav = (list = [], isRoot = false) => {
    return list.map((nav) => {
      if (isRoot) {
        // show megamenu
        if (nav.megaMenu) {
          //@ts-ignore
          return (
            <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />
          );
        } // show megamenu with sub

        if (nav.megaMenuWithSub) {
          //@ts-ignore
          return (
            <MegaMenu2 key={nav.title} title={nav.title} menuList={nav.child} />
          );
        }

        if (nav.url) {
          return (
            <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>
          );
        }

        if (nav.child) {
          return (
            <FlexBox
              key={nav.title}
              alignItems="center"
              position="relative"
              flexDirection="column"
              sx={{
                "&:hover": {
                  "& > .child-nav-item": {
                    display: "block",
                  },
                },
              }}
            >
              <FlexBox alignItems="flex-end" gap={0.3} sx={navLinkStyle}>
                {nav.title}{" "}
                <KeyboardArrowDown
                  sx={{
                    color: "grey.500",
                    fontSize: "1.1rem",
                  }}
                />
              </FlexBox>

              <ChildNavsWrapper className="child-nav-item">
                <BazarCard
                  elevation={3}
                  sx={{
                    mt: 2.5,
                    py: 1,
                    minWidth: 200,
                  }}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </ChildNavsWrapper>
            </FlexBox>
          );
        }
      } else {
        if (nav.url) {
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          );
        }

        if (nav.child) {
          return (
            <ParentNav position="relative" minWidth="230px" key={nav.title}>
              <MenuItem color="grey.700">
                <Box flex="1 1 0" component="span">
                  {nav.title}
                </Box>

                {settings.direction === "ltr" ? (
                  <ArrowRight fontSize="small" />
                ) : (
                  <ArrowLeft fontSize="small" />
                )}
              </MenuItem>

              <ParentNavItem className="parent-nav-item" pl={1}>
                <BazarCard
                  sx={{
                    py: "0.5rem",
                    minWidth: "230px",
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </ParentNavItem>
            </ParentNav>
          );
        }
      }
    });
  };

  return (
    <NavBarWrapper hoverEffect={false} elevation={elevation} line={elevation}>
      {!hideCategories ? (
        <InnerContainer>
          {/* Category megamenu */}
          <CategoryMenu open={navListOpen}>
            <CategoryMenuButton variant="text">
              <Category fontSize="small" />
              <Paragraph
                fontWeight="600"
                textAlign="left"
                flex="1 1 0"
                ml={1.25}
                color="grey.600"
              >
                Categories
              </Paragraph>

              {settings.direction === "ltr" ? (
                <ChevronRight className="dropdown-icon" fontSize="small" />
              ) : (
                <ChevronLeft className="dropdown-icon" fontSize="small" />
              )}
            </CategoryMenuButton>
          </CategoryMenu>

          {/* Horizontal menu */}
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      ) : (
        <InnerContainer
          sx={{
            justifyContent: "center",
          }}
        >
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      )}
    </NavBarWrapper>
  );
}; //  set default props data

Navbar.defaultProps = {
  elevation: 2,
  navListOpen: false,
  hideCategories: false,
};
export default Navbar;
