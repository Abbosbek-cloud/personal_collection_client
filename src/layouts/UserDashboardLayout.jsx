import { Container, Grid } from "@mui/material";
import React from "react";
import AppLayout from "./AppLayout";
import Content from "./user/Content";
import SideBar from "./user/SideBar";

const UserDashboardLayout = ({ children }) => {
  return (
    <AppLayout>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={0}
            md={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <SideBar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Content>{children}</Content>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default UserDashboardLayout;
