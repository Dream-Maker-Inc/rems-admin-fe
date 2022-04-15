import { ThemeProvider } from "@mui/material/styles";
import { EnergyDetailView } from "./components/Mobile/EnergyDetail/EnergyDetailView/EnergyDetailView";
import { MainTemplate } from "./components/Mobile/Main/MainTemplate";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <EnergyDetailView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
