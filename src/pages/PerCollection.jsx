import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import React from "react";
import Loader from "../components/loader";
import CustomTab from "../components/tabs/CustomTab";
import { getOneCollectionGeneral } from "../requests/requests";
import { StyledImg } from "../styled/Components";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const PerCollection = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [collection, setCollections] = React.useState(null);
  const currentLanguageCode = cookies.get("i18next") || "uz";

  const getData = async () => {
    const data = await getOneCollectionGeneral(id);
    setCollections(data);
  };

  React.useEffect(() => {
    getData();
  }, [id]);

  const description = collection?.description[currentLanguageCode];
  return (
    <Container>
      <Grid container spacing={3} sx={{ my: 1 }}>
        <Grid item xs={12} sm={6}>
          <StyledImg src={collection?.image} alt={collection?.name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h4">{collection?.name}</Typography>
            <Typography variant="h5">{t("desc")}</Typography>
            <Typography variant="p" sx={{ my: 2 }}>
              {ReactHtmlParser(description)}
            </Typography>
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="avatar"
                src={collection?.user?.avatar}
                sx={{ mr: 1 }}
              >
                R
              </Avatar>
              <Box component="div">
                <Typography variant="h6">{collection?.user?.name}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {collection ? (
        <CustomTab collectionId={collection?._id} />
      ) : (
        <Loader size={40} height="40vh" />
      )}
    </Container>
  );
};

export default PerCollection;
