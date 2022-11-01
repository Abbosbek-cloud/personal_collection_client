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
import { deleteUser, makeUserAdmin } from "../../requests/requests";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { BASE_URL } from "../../constants/base";
import axios from "axios";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const UserTable = ({ data, callBack }) => {
  console.log(data);
  const token = localStorage.getItem("token");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const blockUser = async (id) => {
    try {
      const res = await axios({
        url: `${BASE_URL}/admin/block/user/${id}`,
        method: "put",
        headers: {
          authorization: `1234567${token}`,
        },
      });
      callBack();
    } catch (error) {
      console.log(error);
    }
  };
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
              onClick={() => makeUserAdmin(row?._id, callBack)}
            >
              {row?.role === "USER" ? (
                <AdminPanelSettingsIcon />
              ) : (
                <PersonIcon />
              )}
            </IconButton>
            <IconButton
              variant="contained"
              onClick={() => navigate(`/admin/users/${row._id}`)}
            >
              <Edit />
            </IconButton>
            <IconButton
              variant="contained"
              sx={{ color: !row.status ? "success" : "error" }}
              onClick={() => blockUser(row._id)}
            >
              {!row?.status ? (
                <LockIcon />
              ) : (
                <LockOpenIcon sx={{ color: "red" }} />
              )}
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
    <div style={{ height: 550, width: "100%", marginInline: "auto" }}>
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
