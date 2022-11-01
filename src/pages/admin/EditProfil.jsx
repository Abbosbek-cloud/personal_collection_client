import { Box, Button, Chip, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomTextField from "../../components/CustomTextField";
import SectionSubmit from "../../components/SectionSubmit";
import { useFormik } from "formik";
import { editProfile } from "../../requests/requests";
import ImageUploader from "../../components/ImageUploader";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MakeUser from "../../components/modals/MakeUser";
import { BASE_URL } from "../../constants/base";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const EditProfil = () => {
  const [modal, setModal] = React.useState(false);
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

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

  //   admin status functions
  const makeAdminAsUser = async () => {
    try {
      const res = await axios({
        url: `${BASE_URL}/admin/block/itself`,
        method: "put",
        headers: {
          authorization: `1234567${localStorage.getItem("token")}`,
        },
      });

      localStorage.clear();
      navigate(res.data.route);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Box sx={{ my: 3, background: "#fff", p: 2, borderRadius: "10px" }}>
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
      <Box sx={{ my: 3, background: "#fff", p: 2, borderRadius: "10px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={6}
            sm={6}
            md={2}
            justifyContent="center"
            sx={{ p: 2, display: "flex", alignItems: "center" }}
          >
            <AdminPanelSettingsIcon />
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              Status
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={7} sx={{ p: 2 }}>
            <Chip variant="outlined" label="ADMIN" sx={{ fontSize: "20px" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={3} sx={{ p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              color="error"
              onClick={handleOpen}
            >
              Make myself USER
            </Button>
            <MakeUser
              open={modal}
              handleClose={handleClose}
              onSuccess={makeAdminAsUser}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditProfil;
