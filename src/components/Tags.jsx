import { Box, Chip } from "@mui/material";
import React from "react";

const Tags = ({ data = null }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data
        ? data?.map((tag) => (
            <Chip
              sx={{ my: 1, mr: 1 }}
              key={tag._id}
              label="Tag1"
              variant="outlined"
              color="success"
            />
          ))
        : undefined}
    </Box>
  );
};

export default Tags;
