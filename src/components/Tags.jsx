import { Box, Chip } from "@mui/material";
import React from "react";

const Tags = ({ data = null, isOwner, deleteTag }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data && isOwner
        ? data?.map((tag) => (
            <Chip
              sx={{ my: 1, mr: 1 }}
              key={tag._id}
              label={tag.name}
              variant="outlined"
              color="success"
              onDelete={() => deleteTag(tag._id)}
            />
          ))
        : data
        ? data?.map((tag) => (
            <Chip
              sx={{ my: 1, mr: 1 }}
              key={tag._id}
              label={tag.name}
              variant="outlined"
              color="success"
            />
          ))
        : undefined}
    </Box>
  );
};

export default Tags;
