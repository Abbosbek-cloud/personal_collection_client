import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AdminItemTable from "../../components/admin/ItemTable";
import { getAllItemsForAdmin } from "../../requests/requests";

const Items = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  const handler = () => {
    navigate("/admin/items/create");
  };

  const getData = async () => {
    const list = await getAllItemsForAdmin();

    setData(list);
  };

  React.useEffect(() => {
    getData();
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
          {t("create")}
        </Button>
      </Box>
      <Divider />
      <AdminItemTable data={data} callBack={getData} isAdmin />;
    </Box>
  );
};

export default Items;
