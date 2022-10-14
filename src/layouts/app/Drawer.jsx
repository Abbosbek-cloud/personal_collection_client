import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import CollectionsIcon from "@mui/icons-material/Collections";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const StyledH3 = styled("h3")({
  fontWeight: 700,
  padding: "8px 16px",
});

const DrawerComponent = ({ open, toggleDrawer, pages }) => {
  const renderIcons = (pageId) => {
    switch (pageId) {
      case "page1":
        return <PermMediaIcon />;
      case "page2":
        return <CollectionsIcon />;
      case "page3":
        return <PeopleAltIcon />;
      default:
        return <></>;
    }
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <StyledH3>Menu</StyledH3>
        </ListItem>
      </List>
      <Divider />
      <List>
        {pages.map(({ name, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{renderIcons(id)}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default DrawerComponent;
