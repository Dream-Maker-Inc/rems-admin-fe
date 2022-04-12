import { ThemeProvider } from "@mui/material/styles";
import { LoginView } from "./components/Mobile/Login/LoginView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <LoginView />
        </ThemeProvider>
    );
}

export default App;
