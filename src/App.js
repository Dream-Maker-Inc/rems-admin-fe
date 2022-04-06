import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./themes/CustomThemes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <main>main</main>
    </ThemeProvider>
  );
}

export default App;
