import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/Mobile/Main/MainTemplate";
import { SitesView } from "./components/Mobile/Sites/SitesView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <SitesView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
