import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Chip,
  Stack,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Tags from "../Tags";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

const arrData = new Array(5);

const ItemCard = () => {
  const classesOfCard = useStyles();
  return (
    <Card className={classesOfCard}>
      <CardHeader
        avatar={
          <Avatar width={50} height={50} aria-label="recipe" variant="square">
            A
          </Avatar>
        }
        title="It is an item"
        subheader={
          <>
            <Chip
              avatar={
                <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
              }
              label="Avatar"
              variant="outlined"
            />
            <Typography variant="p">20 Jan, 2022</Typography>
          </>
        }
      />
      <CardContent>
        <Tags data={arrData} />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
