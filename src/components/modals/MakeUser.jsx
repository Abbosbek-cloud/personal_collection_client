import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { FlexBetween } from "../flex-box";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "5px",
};

const MakeUser = ({ open, handleClose, onSuccess }) => {
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
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Do you really want to make yourself simple user? After doing that
            you will lose this role and if you need it you have to connect with
            other admins and it may take time. If you want to remove yourself
            from admin, click ACCEPT!
          </Typography>
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
              ACCEPT
            </Button>
          </FlexBetween>
        </Box>
      </Fade>
    </Modal>
  );
};

export default MakeUser;
