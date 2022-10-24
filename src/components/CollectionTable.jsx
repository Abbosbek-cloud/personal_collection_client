import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function CollectionTable({ data }) {
  const { t } = useTranslation();
  const columns = [
    { field: "image", headerName: t("tableImg"), width: 100 },
    {
      field: "name",
      headerName: t("tableName"),
      width: 200,
    },
    {
      field: "collectionId",
      headerName: t("tableCollectionName"),
      width: 250,
    },
  ];
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
