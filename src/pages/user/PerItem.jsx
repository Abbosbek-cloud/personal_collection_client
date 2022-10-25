import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import ReactQuill from "../../components/ReactQuill";
import UserSections from "../../components/UserSections";
import { BASE_URL } from "../../constants/base";

const initialValues = {
  name: "",
  collectionId: "",
  user: {
    name: "",
    image: "",
  },
  tags: [{ name: "" }, { name: "" }],
  likes: [{ isLiked: true }],
  image: "lorem",
  description: "",
};

const PerItem = () => {
  const { t } = useTranslation();
  const onSendData = async (values) => {
    await axios({
      url: `${BASE_URL}/api/v1/admin/items`,
      method: "post",
      data: values,
    }).then((res) => {});
  };
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    onSubmit: onSendData,
  });

  return (
    <UserSections header={t("profile")}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <ReactQuill
            name="uz"
            placeholder="Mahsulot haqida"
            theme="snow"
            value={values.description}
            onChange={(data) => setFieldValue("uz", data)}
            sx={{ height: 50 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReactQuill
            name="en"
            placeholder="Mahsulot haqida"
            theme="snow"
            value={values.description}
            onChange={(data) => setFieldValue("en", data)}
            sx={{ height: 50 }}
          />
        </Grid>
      </Grid>
    </UserSections>
  );
};

export default PerItem;
