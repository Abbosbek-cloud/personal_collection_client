import React from "react";
import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import CustomTab from "../components/tabs/CustomTab";
import Tags from "../components/Tags";
import { StyledImg } from "../styled/Components";
import { useParams } from "react-router-dom";
import { getOneItem } from "../requests/requests";

const arrData = [1, 2, 3, 4, 5, 6, 7];

const PerItem = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState({});

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
            <Typography variant="h5">Description</Typography>
            <Typography variant="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              amet beatae dolor. Corporis autem placeat, officiis voluptate
              culpa facere non accusamus ab ullam, obcaecati voluptatibus
              officia quia? Cupiditate, rem inventore. Rerum, dolorem illo nobis
              mollitia, illum ab voluptas quisquam recusandae incidunt labore
              doloremque reiciendis voluptatem natus! Velit dolorum neque ut.
              Corporis voluptatibus sit eveniet totam ipsum voluptatum
              necessitatibus id nobis?
            </Typography>
            <Typography variant="h5">Tags</Typography>
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
      <CustomTab item />
    </Container>
  );
};

export default PerItem;
