import {
  Checkbox,
  styled,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import UpDown from "../icons/UpDown";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  padding: "16px 20px",
  color: theme.palette.grey[900],
}));

const TableHeader = (props) => {
  const {
    order,
    heading,
    orderBy,
    onRequestSort,
    onSelectAll,
    checked,
    selection,
  } = props;
  return (
    <TableHead
      sx={{
        backgroundColor: "grey.200",
      }}
    >
      <TableRow>
        {selection ? (
          <StyledTableCell align="left">
            <Checkbox color="info" checked={checked} onChange={onSelectAll} />
          </StyledTableCell>
        ) : undefined}

        {heading?.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.align}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              onClick={() => onRequestSort(headCell.id)}
              direction={orderBy === headCell.id ? order : "asc"}
              sx={{
                "& .MuiTableSortLabel-icon": {
                  opacity: 1,
                },
              }}
              IconComponent={() => (
                <UpDown
                  sx={{
                    fontSize: 14,
                    ml: 1,
                    color: "grey.600",
                  }}
                />
              )}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
