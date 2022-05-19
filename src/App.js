import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { PartnerMenuView } from "./components/PC/PartnerMenu/PartnerMenuView/PartnerMenuView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <PartnerMenuView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
