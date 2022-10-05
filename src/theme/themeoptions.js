import { components } from "./components";
import { blue, secondary, themeColors } from "./themeColors";
import { typography } from "./typography";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const themes = {
  typography,
  breakpoints,
  components: { ...components },
  palette: {
    primary: { ...secondary, light: blue[100] },
    ...themeColors,
  },
};

export default themes;
