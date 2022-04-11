import { ThemeProvider } from "@mui/material/styles";
import { UsingTermView } from "./components/Mobile/UsingTerm/UsingTermView/UsingTermView";
import { GroupSelectView } from "./components/PC/GroupSelect/GroupSelectView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
  const { isTablet } = useCustomMediaQuery();

  return (
    <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
      <GroupSelectView />
    </ThemeProvider>
  );
}

export default App;
