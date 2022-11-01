import React from "react";
import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import CustomTab from "../components/tabs/CustomTab";
import Tags from "../components/Tags";
import { StyledImg } from "../styled/Components";
import { useParams } from "react-router-dom";
import { getOneItem } from "../requests/requests";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import Loader from "../components/loader";

const PerItem = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [item, setItem] = React.useState(null);
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const getData = async () => {
    const data = await getOneItem(id);
    setItem(data);
  };

  React.useEffect(() => {
    getData();
  }, [id]);
  return (
    <Container>
      <Grid container spacing={3} sx={{ my: 1 }}>
        <Grid item xs={12} sm={6}>
          <StyledImg src={item?.image} alt={item?.name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h4">{item?.name}</Typography>

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
      {item ? (
        <CustomTab item collectionId={item?.collectionId?._id} />
      ) : (
        <Loader size={40} height="40vh" />
      )}
    </Container>
  );
};

export default PerItem;
