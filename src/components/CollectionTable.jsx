import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { Avatar, Box, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { deleteCollection, getUserCollections } from "../requests/requests";
import { getUserRoleRoute } from "../utils/functions";
import { useNavigate } from "react-router-dom";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function CollectionTable({ data }) {
  const [collection, setCollection] = React.useState([]);
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem("user"));
  const preRouter = getUserRoleRoute(user.role);
  const navigate = useNavigate();

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "image",
      headerName: t("tableImg"),
      width: 100,
      renderCell: (row) => {
        return (
          <Box sx={{ width: 45, display: "flex", justifyContent: "center" }}>
            <Avatar src={row.image} variant="square" />
          </Box>
        );
      },
    },
    {
      field: "name",
      headerName: t("tableName"),
      width: 200,
    },
    {
      field: "topic",
      headerName: t("tableCollectionName"),
      width: 250,
    },
    {
      field: "actions",
      headerName: t("tableName"),
      width: 200,
      renderCell: (row) => {
        return (
          <React.Fragment>
            <IconButton
              variant="contained"
              onClick={() => navigate(`${preRouter}/collections/${row._id}`)}
            >
              <Edit />
            </IconButton>
            <IconButton
              variant="contained"
              onCick={() => deleteCollection(row.id)}
            >
              <Delete />
            </IconButton>
          </React.Fragment>
        );
      },
    },
  ];

  React.useEffect(() => {
    getUserCollections(setCollection);
  }, []);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={collection}
        columns={columns}
        getRowId={(row) => row._id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
