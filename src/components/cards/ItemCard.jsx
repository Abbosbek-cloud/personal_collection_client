import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Chip,
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
import { useNavigate } from "react-router-dom";
import { SITE_URL } from "../../constants/base";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { handleCopyUrl } from "../../utils/functions";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

const arrData = new Array(5);

const ItemCard = ({ name, collectionId, user, tags, image, _id }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classesOfCard = useStyles();

  return (
    <Card className={classesOfCard}>
      <CardHeader
        avatar={
          <Avatar
            width={50}
            height={50}
            src={image}
            aria-label="recipe"
            variant="square"
          />
        }
        title={name}
        subheader={
          <Box>
            <Chip
              avatar={<Avatar alt="Natacha" src={user?.avatar} />}
              label={user?.name}
              variant="outlined"
            />
          </Box>
        }
      />
      <CardContent>
        <Tags data={tags?.slice(0, 3)} />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => handleCopyUrl(_id, "item")}
        >
          <ShareIcon />
        </IconButton>
        <IconButton onClick={() => navigate(`/items/${_id}`)}>
          <ChevronRightIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
