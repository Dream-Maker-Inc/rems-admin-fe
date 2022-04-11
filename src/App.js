import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/PC/Main/MainTemplate/MainTemplate";
import { GroupSelectView } from "./components/PC/GroupSelect/GroupSelectView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate />
        </ThemeProvider>
    );
}

export default App;
