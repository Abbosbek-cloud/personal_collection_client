import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { handleCopyUrl } from "../../utils/functions";

function CollectionCard({ image, name, topic, user, _id }) {
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        avatar={
          <Avatar
            src={user?.avatar}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        title={user?.name || t("noExistUser")}
        subheader={user?.email || "example@gmail.com"}
      />
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {t("topic")} : {topic?.name[currentLanguageCode]}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => handleCopyUrl(_id, "collections")}
        >
          <ShareIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CollectionCard;
