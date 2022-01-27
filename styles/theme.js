import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  breakpoints: ["30em", "40em", "52em", "62em", "80em"],
  fonts: {
    body: "Noto Sans JP, system-ui, sans-serif",
    heading: "Gotham, sans-serif",
    mono: "Menlo, monospaced",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "0px",
    md: "2px",
    lg: "4px",
  },
  colors: {
    ...theme.colors,
    blue: {
      100: "#a9adbe",
      200: "#80869f",
      300: "#596180",
      400: "#313f63",
      500: "#002047",
      600: "#061c3c",
      700: "#0a1831",
      800: "#0c1326",
      900: "#0a0e1c",
    },
  },
});

export default customTheme;
