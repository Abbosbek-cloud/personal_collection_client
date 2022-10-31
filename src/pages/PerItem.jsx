import React from "react";
import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import CustomTab from "../components/tabs/CustomTab";
import Tags from "../components/Tags";
import { StyledImg } from "../styled/Components";
import { useParams } from "react-router-dom";
import { getOneItem } from "../requests/requests";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

const PerItem = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [item, setItem] = React.useState({});
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const getData = async () => {
    const data = await getOneItem(id);
    setItem(data);
  };

  React.useEffect(() => {
    getData();
  }, []);
  console.log(id);
  return (
    <Container>
      <Grid container spacing={3} sx={{ my: 1 }}>
        <Grid item xs={12} sm={6}>
          <StyledImg src={item?.image} alt={item?.name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h4">{item?.name}</Typography>
            <Typography variant="h5">{t("parentColl")}</Typography>
            <Box sx={{ height: "100px", my: 2 }}>
              <Grid container spacing={1} sx={{ height: "100%" }}>
                <Grid item xs={3} sm={2} md={1}>
                  <img
                    src={item?.collectionId?.image}
                    alt={item?.collectionId?.name}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={9} sm={10} md={11}>
                  <Box
                    component="div"
                    sx={{
                      height: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                      {item?.collectionId?.name}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h5">{t("tag")}</Typography>
            <Tags data={item?.tags} />
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt={item?.name}
                src={item?.user?.avatar}
                sx={{ mr: 1 }}
              />
              <Box component="div">
                <Typography variant="h6">{item?.user?.name}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CustomTab item collectionId={item?.collectionId} />
    </Container>
  );
};

export default PerItem;
