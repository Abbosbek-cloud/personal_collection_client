import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import { FlexBetween } from "./flex-box";

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ mx: 0 }}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ItemTable({ data }) {
  const { t } = useTranslation();
  const columns = [
    {
      field: "image",
      headerName: t("tableImg"),
      maxWidth: 70,
      disableColumnSelector: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      sortble: false,
      renderCell: (row) => {
        console.log(row);
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
      minWidth: 150,
    },
    {
      field: "collectionId",
      headerName: t("tableCollectionName"),
      minWidth: 150,
    },
    {
      field: "actions",
      headerName: t("tableActions"),
      width: 150,
      disableColumnSelector: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      renderCell: () => {
        return (
          <React.Fragment>
            <IconButton variant="contained">
              <Edit />
            </IconButton>
            <IconButton variant="contained">
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
            // getRowId={(row) => row._id}
            components={{
              Toolbar: CustomToolbar,
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  {t()}
                </Stack>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
