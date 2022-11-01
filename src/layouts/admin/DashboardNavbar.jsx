import { Search } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import { FlexBox, FlexRowCenter } from "../../components/flex-box";
import Globe from "../../components/icons/Globe";
import Toggle from "../../components/icons/Toggle";
import {
  CustomButton,
  DashboardNavbarRoot,
  StyledInputBase,
  StyledToolBar,
  ToggleWrapper,
} from "../../styled/Components";
import AccountPopover from "./popovers/AccountPopover";
import NotificationsPopover from "./popovers/NoficationPopover";
import { useNavigate } from "react-router-dom";
import ChangeLanguage from "../../components/ChangeLanguage";
import HearderSearch from "../../components/HearderSearch";

const DashboardNavbar = ({ handleDrawerToggle }) => {
  const navigate = useNavigate();
  const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <DashboardNavbarRoot position="sticky">
      <Container maxWidth="xl">
        <StyledToolBar disableGutters>
          {downLg && (
            <ToggleWrapper onClick={handleDrawerToggle}>
              <Toggle />
            </ToggleWrapper>
          )}

          <CustomButton
            onClick={() => navigate("/")}
            startIcon={
              <Globe
                sx={{
                  color: "grey.900",
                }}
              />
            }
          >
            Browse Website
          </CustomButton>

          <Box flexGrow={1} />

          <FlexBox alignItems="center" gap={2}>
            <HearderSearch bg="#ddd" />

            <ChangeLanguage />
            <AccountPopover />
          </FlexBox>
        </StyledToolBar>
      </Container>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
