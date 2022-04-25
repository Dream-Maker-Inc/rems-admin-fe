import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/Mobile/Main/MainTemplate";
import { NotificationDetailPopup } from "./components/PC/Notification/Detail";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <NotificationDetailPopup />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
