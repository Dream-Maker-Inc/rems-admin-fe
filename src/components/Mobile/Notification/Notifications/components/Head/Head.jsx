import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SearchBar } from "../../../../common/SearchBar";

export const Head = () => {
    // search
    const [keyword, setKeyword] = useState("");
    const handleKeywordChange = (v) => setKeyword(v);
    const handleSubmit = () => alert("ok");

    return (
        <Root>
            <Stack direction={"row"} spacing={"8px"} alignItems={"center"}>
                <Typography color={"#fff"} whiteSpace={"nowrap"}>
                    사이트명
                </Typography>

                <SearchBar
                    value={keyword}
                    onChange={(e) => handleKeywordChange(e.target.value)}
                    placeholder={"사이트명"}
                    onSubmit={handleSubmit}
                />
            </Stack>
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
