import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { laptopTheme, mobileTheme } from "../src/themes/CustomThemes";
import "../src/index.css";

const withProviders = (Story, context) => <Story {...context} />;

export const decorators = [withProviders];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  multiTheme: {
    list: [
      {
        name: "Laptop",
        selectedByDefault: true,
        wrapperComponent: ({ children }) => {
          return (
            <EmotionThemeProvider theme={laptopTheme}>
              <ThemeProvider theme={laptopTheme}>{children}</ThemeProvider>
            </EmotionThemeProvider>
          );
        },
      },
      {
        name: "Mobile",
        wrapperComponent: ({ children }) => {
          return (
            <EmotionThemeProvider theme={mobileTheme}>
              <ThemeProvider theme={mobileTheme}>{children}</ThemeProvider>
            </EmotionThemeProvider>
          );
        },
      },
    ],
  },
};
