import { createTheme } from "@mui/material/styles";
import { laptopPalette, mobilePalette } from "./Color";
import { lightTypographyOptions } from "./Typography";

export const laptopTheme = createTheme({
  palette: laptopPalette,
  typography: lightTypographyOptions,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: { textTransform: "none" },
      },
    },
  },
});

export const mobileTheme = createTheme({
  palette: mobilePalette,
  typography: lightTypographyOptions,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: { textTransform: "none" },
      },
    },
  },
});
