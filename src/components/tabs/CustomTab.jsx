import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
import SectionCreator from "../SectionCreator";
import ItemWrapper from "../wrappers/ItemWrapper";
import { Button, TextareaAutosize, Typography } from "@mui/material";
import Comment from "../comments/Comment";
import { useTranslation } from "react-i18next";
import { getSimilarItems } from "../../requests/requests";
import Loader from "../loader";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const arrData = [1, 2, 3, 4, 5, 6];

export default function CustomTab({
  data = null,
  comments = null,
  item = false,
  collectionId,
}) {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [itemsData, setItemsData] = React.useState(null);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getSimilars = async () => {
    const list = await getSimilarItems(collectionId, setLoading);
    setItemsData(list);
  };

  React.useEffect(() => {
    getSimilars();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={item ? "Items in one collection!" : "Items"}
            {...a11yProps(0)}
          />
          <Tab label="Comments" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SectionCreator title={t("collItems")}>
          {loading ? (
            <Loader size={40} height="50vh" />
          ) : (
            <ItemWrapper data={itemsData} />
          )}
        </SectionCreator>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5">Comments</Typography>
        <Box component="div" sx={{ maxHeight: "100vh", overflowY: "auto" }}>
          {arrData
            ? arrData.map((comment) => <Comment key={comment._id} />)
            : undefined}
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
