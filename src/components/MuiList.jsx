import { List, ListItem } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MuiList = (props) => {
  const { t } = useTranslation();

  return (
    <List sx={{ width: "100%" }}>
      {props?.list?.map((listItem) => (
        <ListItem>
          <Link to={listItem.url}>{t(listItem.name)}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default MuiList;
