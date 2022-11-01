import { ClickAwayListener, Collapse, Stack } from "@mui/material";
import React from "react";
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

const HearderSearch = () => {
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
      setFP(result?.data?.list);
    } catch (error) {
      setSL(false);
      toast.error("Xatolik yuz  berdi!");
    }
  };
  return (
    <ClickAwayListener onClickAway={() => setSopen(false)}>
      <Stack sx={{ position: "relative", width: "max-content" }}>
        <Search>
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
              {filteredData?.map((item) => (
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
                      sx={{ mt: 0.5, color: "#000000", fontSize: "12px" }}
                    >
                      {item?.price?.toLocaleString()} so'm
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