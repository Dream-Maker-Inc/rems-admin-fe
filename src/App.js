import { ThemeProvider } from "@mui/material/styles";
import { ZEBDashboardView } from "./components/PC/Dashboard/ZEB/ZEBDashboardView";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <ZEBDashboardView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
