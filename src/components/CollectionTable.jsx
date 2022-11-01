import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
} from "@mui/material";
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

export default function CollectionTable({ data = [], callBack }) {
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem("user"));
  const preRouter = getUserRoleRoute(user.role);
  const navigate = useNavigate();
  const currentLanguageCode = cookies.get("i18next") || "uz";
  console.log(data);
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "image",
      headerName: t("tableImg"),
      renderCell: (data) => {
        return (
          <Box sx={{ width: 45, display: "flex", justifyContent: "center" }}>
            <Avatar
              src={data?.row?.image || ""}
              variant="square"
              sx={{ width: "100%", height: "45px", objectFit: "cover" }}
            />
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
      headerName: t("topic"),
      width: 150,
      renderCell: ({ row }) => {
        return (
          <Chip
            label={
              row?.topic?.name
                ? row?.topic?.name[currentLanguageCode]
                : t("noExistColl")
            }
            variant="outlined"
            onClick={() => navigate(`/search?id=${row?.topic?._id}`)}
          />
        );
      },
    },
    {
      field: "actions",
      headerName: t("tableActions"),
      width: 100,
      renderCell: (data) => {
        return (
          <React.Fragment>
            <IconButton
              variant="contained"
              onClick={() =>
                navigate(`${preRouter}/collections/${data?.row?._id || 1}`)
              }
            >
              <Edit />
            </IconButton>
            <IconButton
              variant="contained"
              onClick={() => deleteCollection(data?.row?._id || 1, callBack)}
            >
              <Delete />
            </IconButton>
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div style={{ height: 550, width: "100%", marginInline: "auto" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            sx={{ minHeight: 300 }}
            rows={data}
            columns={columns}
            getRowId={(row) => row?._id || 1}
            components={{
              Toolbar: CustomToolbar,
              LoadingOverlay: CircularProgress,
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  {t("noInfo")}
                </Stack>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
