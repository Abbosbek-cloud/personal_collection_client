import { List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MuiList = (props) => {
  return (
    <List sx={{ width: "100%" }}>
      {props?.list?.map((listItem) => (
        <ListItem>
          <Link to={listItem.url}>{listItem.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default MuiList;
