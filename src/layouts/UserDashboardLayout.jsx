import { Container, Grid } from "@mui/material";
import React from "react";
import AppLayout from "./AppLayout";
import Content from "./user/Content";
import SideBar from "./user/SideBar";

const UserDashboardLayout = ({ children }) => {
  const items = {
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Abbosbek",
    username: "Abek_dev",
  };
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <AppLayout>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <SideBar items={items} />
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
