import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CollectionTable from "../../components/CollectionTable";
import { getAllCollectionsForAdminn } from "../../requests/requests";

const Collections = () => {
  const [data, setData] = React.useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handler = () => {
    navigate("/admin/collections/create");
  };

  const getCollectionData = async () => {
    const list = await getAllCollectionsForAdminn();
    setData(list);
  };

  React.useEffect(() => {
    getCollectionData();
  }, []);

  return (
    <Box sx={{ background: "#fff", my: 3 }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ color: "#fff" }}
          onClick={handler}
        >
          {t("saveBtn")}
        </Button>
      </Box>
      <Divider />
      <CollectionTable data={data} callBack={getCollectionData} />
    </Box>
  );
};

export default Collections;
