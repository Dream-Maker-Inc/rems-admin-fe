import { ThemeProvider } from "@mui/material/styles";
import { GearControlView } from "./components/Mobile/GearControl/GearControlView";
import { MainTemplate } from "./components/Mobile/Main/MainTemplate";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <GearControlView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
