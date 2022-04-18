import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/Mobile/Main/MainTemplate";
import { NoticeView } from "./components/Mobile/Notice/NoticeView/NoticeView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <NoticeView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
