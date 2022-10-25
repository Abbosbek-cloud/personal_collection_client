import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomTextField from "../../components/CustomTextField";
import UserSections from "../../components/UserSections";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SectionSubmit from "../../components/SectionSubmit";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebase";

const Profile = ({ handleDrawer }) => {
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem("user"));
  const [pr, setPr] = React.useState(null);

  const initialValues = {
    avatar: "",
    name: "",
    email: "",
    password: "",
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues,
    onSubmit: () => {
      console.log(values);
    },
  });

  React.useEffect(() => {
    setFieldValue("avatar", user.avatar);
    setFieldValue("name", user.name);
    setFieldValue("email", user.email);
    setFieldValue("password", "*****");
  }, []);

  console.log(user);
  return (
    <UserSections header={t("profile")}>
      <Box>
        <form onSubmit={handleSubmit}>
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
                  sx={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  <img
                    src={values.avatar}
                    alt={values.name}
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      position: "absolute",
                    }}
                  />
                  <label
                    htmlFor="avatar-photo"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                    }}
                  >
                    <IconButton
                      sx={{
                        background: "light",
                      }}
                    >
                      <CameraAltIcon fontSize="50px" />
                    </IconButton>
                  </label>
                  <Box display="none">
                    <input
                      id="avatar-photo"
                      accept="image/*"
                      type="file"
                      name="avatar"
                      onChange={(e) => {
                        const metadata = {
                          contentType: "image/jpeg",
                        };
                        const file = e.target.files[0];
                        const storageRef = ref(storage, "images/" + file.name);
                        const uploadTask = uploadBytesResumable(
                          storageRef,
                          file,
                          metadata
                        );
                        uploadTask.on(
                          "state_changed",
                          (snapshot) => {
                            const progress =
                              (snapshot.bytesTransferred /
                                snapshot.totalBytes) *
                              100;
                            setPr(progress.toFixed(1));
                          },
                          (error) => {
                            console.log(error);
                          },
                          () => {
                            getDownloadURL(uploadTask.snapshot.ref).then(
                              (downloadURL) => {
                                setFieldValue("avatar", downloadURL);
                              }
                            );
                          }
                        );
                      }}
                    />
                  </Box>
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
                value={values.name}
                onChange={handleChange}
                sx={{ width: "100%" }}
              />

              <CustomTextField
                label={t("password")}
                mb={1.5}
                name="password"
                placeholder={t("askPassword")}
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                fullWidth
                sx={{ width: "100%" }}
              />

              <CustomTextField
                label={t("email")}
                mb={1.5}
                name="email"
                placeholder={t("askEmail")}
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                fullWidth
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SectionSubmit />
            </Grid>
          </Grid>
        </form>
      </Box>
    </UserSections>
  );
};

export default Profile;
