import { ThemeProvider } from "@mui/material/styles";
import { DashboardView } from "./components/PC/Dashboard/DashboardView/DashboardView";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <DashboardView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
