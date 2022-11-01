import { Box, Button, Divider } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import EditProfileComponent from "../../components/EditProfileComponent";
import { adminEditOrBlockUser, getOneUserById } from "../../requests/requests";

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

const PerUser = () => {
  const { t } = useTranslation();
  // const user = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = React.useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const handler = () => {
    navigate(-1);
  };

  const initialValues = {
    avatar: "",
    name: "",
    email: "",
    password: "",
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      adminEditOrBlockUser(id, values, t("editMessage"));
    },
  });

  const getValuesOfUser = async () => {
    const userData = await getOneUserById(id);
    console.log(userData);
    setUser(userData);
    setFieldValue("avatar", userData?.avatar);
    setFieldValue("name", userData?.name);
    setFieldValue("email", userData?.email);
    setFieldValue("password", "*****");
  };

  React.useEffect(() => {
    getValuesOfUser();
  }, []);

  return (
    <Box sx={{ background: "#fff", my: 3 }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ color: "#fff" }}
          onClick={handler}
        >
          {t("goBack")}
        </Button>
      </Box>
      <Divider />
      <EditProfileComponent
        handleSubmit={handleSubmit}
        imageUploadStyles={imageUploadStyles}
        values={values}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />
    </Box>
  );
};

export default PerUser;
