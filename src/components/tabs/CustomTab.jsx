import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
          {data
            ? data.pages.map((page, indx) => (
                <Tab label={page.label} {...a11yProps(indx)} />
              ))
            : undefined}
        </Tabs>
      </Box>
      {data
        ? data.nodes.map((node, indx) => (
            <TabPanel value={value} index={indx}>
              {node.node}
            </TabPanel>
          ))
        : undefined}
    </Box>
  );
}
