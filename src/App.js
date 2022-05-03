import { ThemeProvider } from "@mui/material/styles";
import { MainTemplate } from "./components/PC/Main/MainTemplate";
import { SearchGridView } from "./components/PC/SearchGrid/SearchGridView";
import { laptopTheme, mobileTheme } from "./themes/CustomThemes";
import { useCustomMediaQuery } from "./themes/UseCustomMediaQuery";

function App() {
    const { isTablet } = useCustomMediaQuery();

    return (
        <ThemeProvider theme={isTablet ? mobileTheme : laptopTheme}>
            <MainTemplate>
                <SearchGridView />
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
