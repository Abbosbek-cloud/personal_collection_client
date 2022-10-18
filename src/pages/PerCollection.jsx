import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import React from "react";
import Comment from "../components/comments/Comment";
import SectionCreator from "../components/SectionCreator";
import CustomTab from "../components/tabs/CustomTab";
import Tags from "../components/Tags";
import ItemWrapper from "../components/wrappers/ItemWrapper";
import { StyledImg } from "../styled/Components";

const arrData = [1, 2, 3, 4, 5, 6, 7];

const PerCollection = () => {
  return (
    <Container>
      <Grid container spacing={3} sx={{ my: 1 }}>
        <Grid item xs={12} sm={6}>
          <StyledImg src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h4">It is a collection</Typography>
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
            <Tags data={arrData} />
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" sx={{ mr: 1 }}>
                R
              </Avatar>
              <Box component="div">
                <Typography variant="h6">John Doe</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CustomTab />
    </Container>
  );
};

export default PerCollection;
