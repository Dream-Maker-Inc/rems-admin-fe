import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./Color";
import { lightTypographyOptions } from "./Typography";

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: lightTypographyOptions,
});
