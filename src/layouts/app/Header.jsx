import { Box, Button, Container, styled } from "@mui/material";
import React from "react";
import { FlexRowCenter } from "../../components/flex-box";

const HeaderWrapper = styled(Box)({
  width: "100%",
  height: "calc(100vh - 70px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  "@media (max-width: 576px)": {
    width: "100%",
    height: "40vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "@media (min-width: 576px)": {
    width: "100%",
    height: "50vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "@media (min-width: 769px)": {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

const Header = () => {
  const currLang = "en";
  return (
    <HeaderWrapper
      sx={{ backgroundImage: `url('/assets/images/banner1_${currLang}.png')` }}
    >
      <Container
        sx={{ position: "absolute", bottom: { xs: "20px", sm: "30px" } }}
      >
        <FlexRowCenter>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: "0 10px 0 0" }}
          >
            Create
          </Button>
          <Button variant="contained" color="info">
            Watch
          </Button>
        </FlexRowCenter>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;