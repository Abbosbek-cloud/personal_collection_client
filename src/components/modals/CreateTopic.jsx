import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomTextField from "../CustomTextField";
import { FlexBetween } from "../flex-box";
import { style } from "./MakeUser";

const CreateTopic = ({ open, handleClose, onSuccess }) => {
  const { t } = useTranslation();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box>
            <CustomTextField
              value={values.uz}
              onChange={handleChange}
              name="uz"
              placeholder="UZ"
              label={t("tableName")}
              fullWidth
            />
          </Box>
          <Box>
            <CustomTextField
              value={values.uz}
              onChange={handleChange}
              name="uz"
              placeholder="UZ"
              label={t("tableName")}
              fullWidth
            />
          </Box>
          <FlexBetween sx={{ mt: 2, px: { xs: 0, sm: 1, md: 2 } }}>
            <Button variant="contained" color="error" onClick={handleClose}>
              CLOSE
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ color: "#fff" }}
              onClick={onSuccess}
            >
              {t("create")}
            </Button>
          </FlexBetween>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CreateTopic;
