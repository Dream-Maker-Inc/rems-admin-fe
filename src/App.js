import { ThemeProvider } from "@mui/material/styles";
import { LoginView } from "./components/PC/Login/LoginView";
import { lightTheme } from "./themes/CustomThemes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <LoginView />
    </ThemeProvider>
  );
}

export default App;
