import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SearchBar } from "../../../common/SearchBar";

export const SiteSearchRow = () => {
    const [siteName, setSiteName] = useState("");
    const handleSiteNameChange = (v) => setSiteName(v);

    const handleSearch = () => alert("search");

    return (
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
    );
};

const ItemRow = ({ children }) => (
    <Stack
        direction={"row"}
        alignItems={"center"}
        width={"100%"}
        spacing={"12px"}
    >
        {children}
    </Stack>
);
