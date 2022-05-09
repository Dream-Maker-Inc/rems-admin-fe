import { ThemeProvider } from "@mui/material/styles";
import { ControlDashboardView } from "./components/PC/Dashboard/Control/ControlDashboardView";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <ControlDashboardView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
