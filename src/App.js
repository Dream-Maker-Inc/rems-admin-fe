import { ThemeProvider } from "@mui/material/styles";
import { GroupSelectView } from "./components/PC/GroupSelect/GroupSelectView";
import { lightTheme } from "./themes/CustomThemes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GroupSelectView />
    </ThemeProvider>
  );
}

export default App;
