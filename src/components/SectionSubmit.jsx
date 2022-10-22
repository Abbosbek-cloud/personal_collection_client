import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const SectionSubmit = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        py: 1,
      }}
    >
      <Button type="submit" variant="contained">
        {t("saveBtn")}
      </Button>
    </Box>
  );
};

export default SectionSubmit;
