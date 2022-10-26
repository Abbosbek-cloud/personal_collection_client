import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomTextField from "../../components/CustomTextField";
import UserSections from "../../components/UserSections";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SectionSubmit from "../../components/SectionSubmit";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebase";
import { editProfile } from "../../requests/requests";
import ImageUploader from "../../components/ImageUploader";

const imageUploadStyles = {
  boxSx: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    position: "relative",
  },
  imgSx: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    position: "absolute",
  },
  buttonSx: {
    position: "absolute",
    bottom: 0,
    right: 0,
    background: "light",
  },
};

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
    onSubmit: (values) => {
      editProfile(values, t("editMessage"));
    },
  });

  React.useEffect(() => {
    setFieldValue("avatar", user.avatar);
    setFieldValue("name", user.name);
    setFieldValue("email", user.email);
    setFieldValue("password", "*****");
  }, []);
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
                {/* <Box
                  component="div"
                  sx={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  <label htmlFor="avatar-photo">
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
                  </label>
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      background: "light",
                    }}
                  >
                    <label htmlFor="avatar-photo">
                      <CameraAltIcon fontSize="50px" />
                    </label>
                  </IconButton>
                  <input
                    id="avatar-photo"
                    style={{ display: "none" }}
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
                </Box> */}
                <ImageUploader
                  boxSx={imageUploadStyles.boxSx}
                  imgSx={imageUploadStyles.imgSx}
                  buttonSx={imageUploadStyles.buttonSx}
                  alt={values.name}
                  src={values.avatar}
                  setFieldValue={setFieldValue}
                  field="avatar"
                />
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
