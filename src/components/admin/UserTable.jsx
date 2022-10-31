import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { center } from "./ItemTable";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../requests/requests";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const UserTable = ({ data, callBack }) => {
  console.log(data);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const columns = [
    {
      field: "avatar",
      headerName: t("tableImg"),
      maxWidth: 70,
      disableColumnSelector: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      sortble: false,
      renderCell: ({ row }) => {
        return (
          <Box sx={{ width: 45, display: "flex", justifyContent: "center" }}>
            <Avatar src={row?.avatar || "A"} variant="square" />
          </Box>
        );
      },
    },
    {
      field: "name",
      headerName: t("name"),
      width: 150,
    },
    {
      field: "email",
      headerName: t("email"),
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: ({ row }) => {
        return (
          <Box sx={center}>
            <Chip
              variant="outlined"
              color={row?.status ? "error" : "success"}
              label={row?.status ? t("statusBlock") : t("statusActive")}
            />
          </Box>
        );
      },
    },
    {
      field: "role",
      headerName: "Role",
      width: 100,
      renderCell: ({ row }) => {
        return (
          <Box sx={center}>
            <Chip
              variant="outlined"
              color={row?.role === "USER" ? "info" : "success"}
              label={row?.role}
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
              onClick={() => navigate(`/admin/users/${row._id}`)}
            >
              <Edit />
            </IconButton>
            <IconButton
              variant="contained"
              onClick={() => deleteUser(row._id, callBack)}
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
};

export default UserTable;
