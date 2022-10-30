import { Box, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomTextField from "./CustomTextField";
import ImageUploader from "./ImageUploader";
import SectionSubmit from "./SectionSubmit";

const EditProfileComponent = ({
  handleSubmit,
  imageUploadStyles,
  values,
  handleChange,
  setFieldValue,
}) => {
  const { t } = useTranslation();
  return (
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
  );
};

export default EditProfileComponent;
