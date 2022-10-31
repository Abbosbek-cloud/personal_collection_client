import AddIcon from "@mui/icons-material/Add";
import { Autocomplete, Box, Grid, IconButton } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import ImageUploader from "../../components/ImageUploader";
import SectionSubmit from "../../components/SectionSubmit";
import Tags from "../../components/Tags";
import UserSections from "../../components/UserSections";
import {
  createItem,
  editItem,
  getOneItem,
  getUserCollections,
} from "../../requests/requests";

const imageUploadStyles = {
  boxSx: {
    width: "100%",
    minHeight: "300px",
    maxHeight: "300px",
    position: "relative",
  },
  imgSx: {
    width: "100%",
    minHeight: "200px",
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

const PerItem = () => {
  const { id } = useParams();
  const [collections, setCollections] = useState([
    {
      description: {
        uz: "",
        en: "",
      },
    },
  ]);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const deleteTag = (id) => {
    const newTags = tags.filter((item) => item._id !== id);
    setTags(newTags);
  };

  const addTags = () => {
    const newTag = {
      name: tag,
    };

    const newTags = [...tags, newTag];

    setTags(newTags);
    setTag("");
  };

  const { t } = useTranslation();
  const navigate = useNavigate();
  const handler = () => {
    navigate(-1);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const initialValues = {
    image: "",
    collectionId: "",
    user: user._id,
    tags: [{ name: "lorem", _id: "23123hu" }],
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.tags = tags;
      editItem(id, values);
    },
  });

  const getPerItems = async () => {
    const data = await getOneItem(id);
    setFieldValue("name", data.name);
    setFieldValue("collectionId", data.collectionId);
    setFieldValue("tags", data.tags);
    setFieldValue("image", data.image);
    setTags(data.tags);
    // console.log(param);
  };

  const getAutoCompleteCollections = async () => {
    const list = await getUserCollections();
    setCollections(list);
  };

  React.useEffect(() => {
    getAutoCompleteCollections();
    getPerItems();
    console.log(values);
  }, []);

  return (
    <UserSections header={t("newItem")}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={6} lg={4}>
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
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Tags data={tags} isOwner deleteTag={deleteTag} />
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                label={t("tag")}
                mb={1.5}
                name="tag"
                placeholder={t("tagAsk")}
                variant="outlined"
                fullWidth
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                sx={{ width: "100%" }}
              />
              <IconButton onClick={addTags} sx={{ ml: 1 }}>
                <AddIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={collections}
              sx={{ width: "100%" }}
              defaultValue={{ name: "Choose one of the collections", _id: 0 }}
              onChange={(e, val) => setFieldValue("collectionId", val._id)}
              getOptionLabel={(option) => option.name.toString()}
              renderInput={(params) => {
                return <CustomTextField {...params} label={t("collections")} />;
              }}
            />
          </Grid>
        </Grid>
        <SectionSubmit />
      </form>
    </UserSections>
  );
};

export default PerItem;
