import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../requests/requests";

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ mx: 0 }}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ItemTable({ data, callBack, isAdmin }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const columns = [
    {
      field: "image",
      headerName: t("tableImg"),
      maxWidth: 70,
      disableColumnSelector: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      sortble: false,
      renderCell: (data) => {
        return (
          <Box sx={{ width: 45, display: "flex", justifyContent: "center" }}>
            <Avatar src={data.row.image} variant="square" />
          </Box>
        );
      },
    },
    {
      field: "name",
      headerName: t("tableName"),
      minWidth: 200,
    },
    {
      field: "collectionId",
      headerName: t("tableCollectionName"),
      minWidth: 200,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyConent: "center",
              alignItems: "center",
            }}
          >
            <Chip
              variant="outlined"
              label={row?.collectionId?.name || "Collection is not exist!"}
              onClick={() =>
                navigate(`/user/collections/${row?.collectionId?._id}`)
              }
            />
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: t("tableActions"),
      width: 150,
      disableColumnSelector: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        return (
          <React.Fragment>
            <IconButton
              variant="contained"
              onClick={() => navigate(`/user/items/${row._id}`)}
            >
              <Edit />
            </IconButton>
            <IconButton
              variant="contained"
              onClick={() => deleteItem(row._id, callBack)}
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
            rows={data}
            columns={columns}
            getRowId={(row) => row?._id}
            components={{
              Toolbar: CustomToolbar,
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  {t("noInfo")}
                </Stack>
              ),
              LoadingOverlay: CircularProgress,
            }}
          />
        </div>
      </div>
    </div>
  );
}
