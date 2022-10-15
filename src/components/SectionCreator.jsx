import { Container, Typography } from "@mui/material";
import React from "react";

const SectionCreator = ({ children, title }) => {
  return (
    <Container sx={{ my: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Container>
  );
};

export default SectionCreator;
