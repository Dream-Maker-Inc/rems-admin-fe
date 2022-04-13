import { ThemeProvider } from "@mui/material/styles";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";
import { MainTemplate } from "./components/Mobile/Main/MainTemplate";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate />
        </ThemeProvider>
    );
}

export default App;
