import { SearchRounded } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";

export const Head = () => {
    const siteName = "편백경로당";

    const moveSiteList = () => alert("move site list");

    return (
        <Root>
            <SiteNameWithSearchIcon
                siteName={siteName}
                onSearch={moveSiteList}
            />
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        width={"100%"}
        p={"16px 20px"}
        bgcolor={"primary.A200"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);

const SiteNameWithSearchIcon = ({ siteName, onSearch }) => (
    <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"8px"}
    >
        <Typography variant="h6" color={"secondary"}>
            {siteName}
        </Typography>

        <IconButton
            size={"small"}
            sx={{
                bgcolor: "primary.main",
                width: "24px",
                height: "24px",
                padding: "4px",
            }}
            onClick={onSearch}
        >
            <SearchRounded
                htmlColor="#fff"
                sx={{ width: "100%", height: "100%" }}
            />
        </IconButton>
    </Stack>
);
