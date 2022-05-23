import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { UserAssignView } from "./components/PC/UserAssign/UserAssignView/UserAssignView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <UserAssignView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
