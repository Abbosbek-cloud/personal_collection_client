import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Collapse, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import ClickAwayListener from "react-click-away-listener";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/base";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HearderSearch = ({ bg }) => {
  const [searchOpen, setSopen] = React.useState(true);
  const [filteredData, setFP] = React.useState([]);
  const [isLoading, setSL] = React.useState(false);
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    setSopen(true);
    setSL(true);
    try {
      const result = await axios({
        method: "GET",
        url: `${BASE_URL}/search/global?filter=${e.target.value}`,
      });
      setSL(false);
      if (!result?.data?.items?.length && !result?.data?.collections?.length) {
        setSopen(false);
      }
      setFP(result?.data);
    } catch (error) {
      setSL(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setSopen(false)}>
      <Stack sx={{ position: "relative", width: "max-content", zIndex: 9999 }}>
        <Search
          sx={{
            backgroundColor: bg ? "#ddd" : "",
            border: bg ? "1px solid #ddd" : "",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Qidirish..."
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearch}
          />
        </Search>
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            marginTop: "43px",
          }}
        >
          <Collapse
            in={searchOpen}
            sx={{
              background: "#ffffff",
              borderRadius: "5px",
              width: "100%",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
          >
            <Stack>
              {isLoading ? (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  py={1}
                >
                  <CircularProgress size={30} color="primary" />
                </Stack>
              ) : undefined}
              {filteredData?.collections?.map((item) => (
                <Stack
                  onClick={() => navigate(`/collections/${item?._id}`)}
                  direction="row"
                  key={item?._id}
                  alignItems="center"
                  mt={0.5}
                  sx={{ p: 0.5, cursor: "pointer" }}
                >
                  <Avatar src={item?.image} />
                  <Stack ml={1}>
                    <Typography sx={{ color: "#000000", fontSize: "12px" }}>
                      {item?.name}
                    </Typography>
                    <Typography
                      sx={{ mt: 0.5, color: "#ddd", fontSize: "12px" }}
                    >
                      {item?._id}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
              {filteredData?.items?.map((item) => (
                <Stack
                  onClick={() => navigate(`/items/${item?._id}`)}
                  direction="row"
                  key={item?._id}
                  alignItems="center"
                  mt={0.5}
                  sx={{ p: 0.5, cursor: "pointer" }}
                >
                  <Avatar src={item?.image} />
                  <Stack ml={1}>
                    <Typography sx={{ color: "#000000", fontSize: "12px" }}>
                      {item?.name}
                    </Typography>
                    <Typography
                      sx={{ mt: 0.5, color: "#ddd", fontSize: "12px" }}
                    >
                      {item?._id}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Collapse>
        </Stack>
      </Stack>
    </ClickAwayListener>
  );
};

export default HearderSearch;
