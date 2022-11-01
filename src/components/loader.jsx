import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({ size, height }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loader;
