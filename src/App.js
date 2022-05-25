import { ThemeProvider } from "@mui/material/styles";
import { LoadingPopup } from "./components/common/popup/LoadingPopup/LoadingPopup";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { StoreStatusView } from "./components/PC/StoreStatus/StoreStatusView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <StoreStatusView />
                <LoadingPopup />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
