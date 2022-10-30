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

const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;
