import { SearchRounded } from "@mui/icons-material";
import { IconButton, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const Head = () => {
    const siteName = "편백경로당";

    const moveSiteList = () => alert("move site list");

    const targets = ["설비 유형1", "설비 유형2", "설비 유형3"];
    const [target, setTarget] = useState(targets[0]);
    const handleTargetChange = (v) => setTarget(v);

    return (
        <Root>
            <SiteNameWithSearchIcon
                siteName={siteName}
                onSearch={moveSiteList}
            />

            <Stack direction={"row"} spacing={"8px"} alignItems={"center"}>
                <Typography color={"#fff"} whiteSpace={"nowrap"}>
                    설비유형
                </Typography>
                <CustomSelector
                    value={target}
                    onChange={(e) => handleTargetChange(e.target.value)}
                    items={targets}
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

const CustomSelector = ({ value, onChange, items }) => (
    <Select
        fullWidth
        size="small"
        sx={{ bgcolor: "#fff" }}
        value={value}
        onChange={onChange}
    >
        {items.map((it) => (
            <MenuItem key={it} value={it}>
                {it}
            </MenuItem>
        ))}
    </Select>
);
