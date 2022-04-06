import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { lightTheme } from "../src/themes/CustomThemes";

const defaultTheme = lightTheme;

const withProviders = (Story, context) => (
  <EmotionThemeProvider theme={defaultTheme}>
    <ThemeProvider theme={defaultTheme}>
      <Story {...context} />
    </ThemeProvider>
  </EmotionThemeProvider>
);

export const decorators = [withProviders];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
