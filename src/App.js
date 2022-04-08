import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { lightTheme } from "./themes/CustomThemes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainTemplate />
    </ThemeProvider>
  );
}

export default App;
