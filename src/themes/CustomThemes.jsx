import { createTheme } from "@mui/material/styles";
import { laptopPalette, mobilePalette } from "./Color";
import { laptopTypographyOptions, mobileTypographyOptions } from "./Typography";

export const laptopTheme = createTheme({
  palette: laptopPalette,
  typography: laptopTypographyOptions,
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
  typography: mobileTypographyOptions,
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
