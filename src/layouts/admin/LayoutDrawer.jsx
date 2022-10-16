import { Drawer } from "@mui/material";
import { Wrapper } from "../../styled/Components";

const LayoutDrawer = (props) => {
  const { children, open, onClose, drawerWidth = 280 } = props;
  return (
    <Drawer
      open={open}
      anchor="left"
      onClose={onClose}
      PaperProps={{
        sx: {
          width: drawerWidth,
        },
      }}
    >
      <Wrapper>{children}</Wrapper>
    </Drawer>
  );
};

export default LayoutDrawer;
