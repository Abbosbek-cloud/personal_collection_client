import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomTextField from "../../components/CustomTextField";
import UserSections from "../../components/UserSections";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SectionSubmit from "../../components/SectionSubmit";

const Profile = ({ handleDrawer }) => {
  const { t } = useTranslation();
  const items = {
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Abbosbek",
    username: "Abek_dev",
    status: false,
  };
  return (
    <UserSections header={t("profile")}>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box
              component="div"
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                sx={{ width: "200px", height: "200px", position: "relative" }}
              >
                <img
                  src={items.img}
                  alt={items.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "block",
                    position: "absolute",
                  }}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "light",
                  }}
                >
                  <CameraAltIcon fontSize="50px" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              label={t("name")}
              mb={1.5}
              name="name"
              placeholder={t("askName")}
              variant="outlined"
              fullWidth
              sx={{ width: "100%" }}
            />
            <CustomTextField
              label={t("phone")}
              mb={1.5}
              name="name"
              placeholder={t("askPhone")}
              variant="outlined"
              fullWidth
              sx={{ width: "100%" }}
            />

            <CustomTextField
              label={t("password")}
              mb={1.5}
              name="name"
              placeholder={t("askPassword")}
              variant="outlined"
              fullWidth
              sx={{ width: "100%" }}
            />

            <CustomTextField
              label={t("email")}
              mb={1.5}
              name="name"
              placeholder={t("askEmail")}
              variant="outlined"
              fullWidth
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <SectionSubmit />
          </Grid>
        </Grid>
      </Box>
    </UserSections>
  );
};

export default Profile;
