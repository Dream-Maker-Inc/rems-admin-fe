import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/Mobile/Main/MainTemplate";
import { NotificationView } from "./components/Mobile/Notification";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <NotificationView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
