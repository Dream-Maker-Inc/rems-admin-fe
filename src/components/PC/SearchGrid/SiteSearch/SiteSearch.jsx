import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SearchBar } from "../../common/SearchBar";

export const SiteSearch = () => {
    const [siteName, setSiteName] = useState("");
    const handleSiteNameChange = (v) => setSiteName(v);

    const handleSearch = () => alert("search");

    return (
        <Root>
            <ItemRow>
                <Typography width={"100px"} textAlign={"end"}>
                    사이트명
                </Typography>

                <Stack direction={"row"} alignItems={"center"} spacing={"24px"}>
                    <SearchBar
                        value={siteName}
                        onChange={(e) => handleSiteNameChange(e.target.value)}
                        onSubmit={handleSearch}
                    />
                    <Typography
                        variant="body2"
                        color={"#e27b7c"}
                        sx={{ opacity: 0.8 }}
                    >
                        *사이트를 먼저 선택하세요.
                    </Typography>
                </Stack>
            </ItemRow>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        direction={"row"}
        width={"100%"}
        bgcolor={"#374750"}
        padding={"16px"}
        color={"#fff"}
        whiteSpace={"nowrap"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);

const ItemRow = ({ children }) => (
    <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
        {children}
    </Stack>
);
