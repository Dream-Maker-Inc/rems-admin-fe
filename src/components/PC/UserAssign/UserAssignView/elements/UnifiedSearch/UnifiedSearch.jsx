import { SearchRounded } from "@mui/icons-material";
import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const UnifiedSearch = () => {
    const partners = ["협력사1", "협력사2", "협력사3"];
    const [partner, setPartner] = useState(partners[0]);
    const handlePartnerChange = (v) => setPartner(v);

    const users = ["사용자1", "사용자2", "사용자3"];
    const [user, setUser] = useState(users[0]);
    const handleUserChange = (v) => setUser(v);

    const sites = ["사이트1", "사이트2", "사이트3"];
    const [site, setSite] = useState(sites[0]);
    const handleSiteChange = (v) => setSite(v);

    const regions = ["지역1", "지역2", "지역3"];
    const [region, setRegion] = useState(regions[0]);
    const handleRegionChange = (v) => setRegion(v);

    const handleSearch = () => alert("search");

    return (
        <Root>
            <Stack direction={"row"} spacing={"24px"}>
                <ItemRow>
                    <Typography width={"100px"} textAlign={"end"}>
                        협력사
                    </Typography>
                    <CustomSelector
                        items={partners}
                        value={partner}
                        onChange={(e) => handlePartnerChange(e.target.value)}
                    />
                </ItemRow>

                <ItemRow>
                    <Typography>사용자</Typography>
                    <CustomSelector
                        items={users}
                        value={user}
                        onChange={(e) => handleUserChange(e.target.value)}
                    />
                </ItemRow>

                <ItemRow>
                    <Typography>사이트</Typography>
                    <CustomSelector
                        items={sites}
                        value={site}
                        onChange={(e) => handleSiteChange(e.target.value)}
                    />
                </ItemRow>

                <ItemRow>
                    <Typography>지역</Typography>
                    <CustomSelector
                        items={regions}
                        value={region}
                        onChange={(e) => handleRegionChange(e.target.value)}
                    />
                </ItemRow>
            </Stack>

            <Stack>
                <Button
                    variant="contained"
                    startIcon={<SearchRounded />}
                    onClick={handleSearch}
                >
                    검색
                </Button>
            </Stack>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        direction={"row"}
        width={"100%"}
        padding={"16px"}
        color={"#fff"}
        bgcolor={"#394750"}
        borderRadius={"4px"}
        whiteSpace={"nowrap"}
        justifyContent={"space-between"}
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

const CustomSelector = ({ value, onChange, items }) => (
    <Select
        fullWidth
        size="small"
        sx={{ bgcolor: "#3a444d", width: "160px" }}
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
