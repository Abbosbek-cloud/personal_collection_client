import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
import SectionCreator from "../SectionCreator";
import ItemWrapper from "../wrappers/ItemWrapper";
import { Button, TextareaAutosize, Typography } from "@mui/material";
import Comment from "../comments/Comment";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const arrData = [1, 2, 3, 4, 5, 6];

export default function CustomTab({ data = null }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Items" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SectionCreator title="Collection's items">
          <ItemWrapper data={arrData} />
        </SectionCreator>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5">Comments</Typography>
        <Box component="div" sx={{ maxHeight: "100vh", overflowY: "auto" }}>
          {arrData ? arrData.map((comment) => <Comment />) : undefined}
        </Box>
        <form style={{ margin: "10px 0" }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: "100%" }}
          />
          <Button sx={{ marginTop: "10px" }} variant="outlined">
            Send
          </Button>
        </form>
      </TabPanel>
    </Box>
  );
}
