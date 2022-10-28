import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { Avatar, Box, Chip, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { deleteCollection, getUserCollections } from "../requests/requests";
import { getUserRoleRoute } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function CollectionTable({ data }) {
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem("user"));
  const preRouter = getUserRoleRoute(user.role);
  const navigate = useNavigate();
  const currentLanguageCode = cookies.get("i18next") || "uz";

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "image",
      headerName: t("tableImg"),
      renderCell: (row) => {
        return (
          <Box sx={{ width: 45, display: "flex", justifyContent: "center" }}>
            <Avatar src={row.image} variant="square" />
          </Box>
        );
      },

      maxWidth: 70,
      disableColumnSelector: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      sortble: false,
    },
    {
      field: "name",
      headerName: t("tableName"),
      width: 125,
    },
    {
      field: "topic",
      headerName: t("tableCollectionName"),
      width: 250,
      renderCell: (data) => {
        console.log(data.row);
        return (
          <Chip
            label={data.row.topic.name[currentLanguageCode]}
            variant="outlined"
            onClick={() => navigate(`/search?id=${data.row.topic._id}`)}
          />
        );
      },
    },
    {
      field: "actions",
      headerName: t("tableName"),
      width: 100,
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

  return (
    <div style={{ height: 550, width: "auto", marginInline: "auto" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            sx={{ minHeight: 300 }}
            rows={data}
            columns={columns}
            getRowId={(row) => row._id}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
      </div>
    </div>
  );
}
