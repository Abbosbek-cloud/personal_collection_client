import { Box, IconButton } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { storage } from "../utils/firebase";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ImageUploader = ({
  boxSx,
  imgSx,
  src,
  alt,
  buttonSx,
  setFieldValue,
  field,
}) => {
  return (
    <Box component="div" sx={boxSx}>
      <label htmlFor="avatar-photo">
        <img src={src} alt={alt} style={imgSx} />
      </label>
      <IconButton sx={buttonSx}>
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
          const uploadTask = uploadBytesResumable(storageRef, file, metadata);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFieldValue(field, downloadURL);
              });
            }
          );
        }}
      />
    </Box>
  );
};

export default ImageUploader;
