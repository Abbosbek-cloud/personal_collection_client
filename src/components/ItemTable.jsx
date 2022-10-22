import {
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHeader from "../table/TableHeader";
import TablePagination from "../table/TablePagination";
import Scrollbar from "components/Scrollbar";
import useMuiTable from "hooks/useMuiTable";
import React from "react";
import { styled } from "@mui/styles";

const tableHeading = [];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 14,
  paddingTop: 10,
  fontWeight: 600,
  paddingBottom: 10,
  color: theme.palette.grey[900],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const StyledTableRow = styled(TableRow)(() => ({
  ":last-child .MuiTableCell-root": {
    border: 0,
  },
  "&.Mui-selected": {
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "transparent",
    },
  },
}));

const PaymentGrid = ({ data }) => {
  const { t } = useTranslation();
  console.log(data);
  const {
    order,
    orderBy,
    requests,
    selected,
    rowsPerPage = 10,
    filteredList = [],
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: data, rowsPerPage: 10 });
  return (
    <>
      <Scrollbar>
        <TableContainer>
          <Table>
            <TableHeader
              order={order}
              hideSelectBtn
              orderBy={orderBy}
              heading={tableHeading}
              rowCount={requests?.length}
              numSelected={selected?.length}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {filteredList?.length ? (
                filteredList?.map((item) => (
                  <StyledTableRow role="checkbox" key={item._id}>
                    <StyledTableCell align="left">{item}</StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={5} style={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "red",
                        padding: "20px 0",
                        fontWeight: 600,
                      }}
                    >
                      {t("noInfo")}
                    </Typography>
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Stack alignItems="center" my={4}>
        {filteredList?.length > 10 ? (
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(requests?.length / rowsPerPage)}
          />
        ) : undefined}
      </Stack>
    </>
  );
};

export default PaymentGrid;
