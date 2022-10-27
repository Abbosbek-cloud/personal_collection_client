import { Autocomplete, Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import ImageUploader from "../../components/ImageUploader";
import ReactQuill from "../../components/ReactQuill";
import UserSections from "../../components/UserSections";
import cookies from "js-cookie";
import { getAllTopics, getOneCollection } from "../../requests/requests";
import SectionSubmit from "../../components/SectionSubmit";

const imageUploadStyles = {
  boxSx: {
    width: "100%",
    minHeight: "300px",
    maxHeight: "300px",
    position: "relative",
  },
  imgSx: {
    width: "100%",
    minHeight: "300px",
    maxHeight: "300px",
    objectFit: "cover",
    position: "absolute",
  },
  buttonSx: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    background: "light",
  },
};
const PerCollection = () => {
  const { id } = useParams();
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const user = JSON.parse(localStorage.getItem("user"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [description, setDescription] = React.useState({
    uzbdesc: "",
    engdesc: "",
  });
  const [topics, setTopics] = React.useState([
    {
      name: { uz: "Boshlangich ma'lumot", en: "Default info" },
      _id: "1w1oejiu3",
    },
  ]);

  const handler = () => {
    navigate(-1);
  };

  const initialValues = {
    image: "",
    user: user._id,
    description: {
      uz: description.uzbdesc,
      en: description.engdesc,
    },
    topic: "",
    name: "",
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {},
  });

  React.useState(() => {
    getAllTopics(id, setDescription);
    getOneCollection(id, setFieldValue, setDescription);
  }, []);

  return (
    <UserSections
      header={t("newCollection")}
      button
      buttonText={t("goBack")}
      onClick={handler}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Box component="div" sx={{ mb: 1 }}>
              <ImageUploader
                boxSx={imageUploadStyles.boxSx}
                imgSx={imageUploadStyles.imgSx}
                buttonSx={imageUploadStyles.buttonSx}
                alt={values.name}
                src={values.image}
                setFieldValue={setFieldValue}
                field="image"
              />
            </Box>
            <Box component="div" sx={{ mt: 1 }}>
              <CustomTextField
                label={t("tableName")}
                mb={1.5}
                name="name"
                placeholder={t("entName")}
                variant="outlined"
                fullWidth
                value={values.name}
                onChange={handleChange}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box component="div" sx={{ mt: 1 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={topics}
                sx={{ width: "100%" }}
                onChange={(e, val) => setFieldValue("topic", val._id)}
                getOptionLabel={(option) =>
                  option?.name[currentLanguageCode]?.toString()
                }
                getOptionSelected={(option) => option._id === values.topic}
                renderInput={(params) => {
                  return (
                    <CustomTextField
                      {...params}
                      label={t("topic")}
                      placeholder={t("chooseTopic")}
                    />
                  );
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6}>
                <ReactQuill
                  name="uzbdesc"
                  placeholder="To'plam haqida o'zbek tilida yozing!"
                  theme="snow"
                  value={description.uzbdesc}
                  onChange={(data) =>
                    setDescription({ ...description, uzbdesc: data })
                  }
                  sx={{ height: 50 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ReactQuill
                  name="engdesc"
                  placeholder="Write about collection in English!"
                  theme="snow"
                  value={description.engdesc}
                  onChange={(data) =>
                    setDescription({ ...description, engdesc: data })
                  }
                  sx={{ height: 50 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <SectionSubmit />
      </form>
    </UserSections>
  );
};

export default PerCollection;
