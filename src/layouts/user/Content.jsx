import { Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import UserSections from "../../components/UserSections";
import useWindowSize from "../../hooks/useWindowSize";

const Content = ({ children }) => {
  const { t } = useTranslation();
  const handleDrawer = () => {};
  const windowSize = useWindowSize();
  return (
    <Paper elevation={3}>
      {windowSize < 959 ? (
        <UserSections menu handleDrawer={handleDrawer} />
      ) : undefined}
      {children}
    </Paper>
  );
};

export default Content;
