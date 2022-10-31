import { Box, Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import SideBarDrawer from "../../components/SideBarDrawer";
import UserSections from "../../components/UserSections";
import useWindowSize from "../../hooks/useWindowSize";

const Content = ({ children }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDrawer = (open) => (event) => {
    setIsOpen(open);
  };
  const windowSize = useWindowSize();
  const items = {
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Abbosbek",
    username: "Abek_dev",
  };
  return (
    <Paper elevation={3} sx={{ height: "auto" }}>
      {windowSize < 959 ? (
        <UserSections menu handleDrawer={handleDrawer} />
      ) : undefined}
      <Box>{children}</Box>
      <SideBarDrawer open={isOpen} toggleDrawer={handleDrawer} items={items} />
    </Paper>
  );
};

export default Content;
