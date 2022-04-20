import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SettingSectionTemplate } from "../common/SettingSectionTemplate/SettingSectionTemplate";

export const GroupSitesSetting = () => {
    // groups
    const groupItems = ["그룹1", "그룹2", "그룹3", "그룹4"];
    const [group, setGroup] = useState(groupItems[0]);
    const handleGroupChange = (v) => setGroup(v);

    // sites
    const siteItems = ["사이트1", "사이트2", "사이트3", "사이트4"];
    const [site, setSite] = useState(siteItems[0]);
    const handleSiteChange = (v) => setSite(v);

    return (
        <SettingSectionTemplate title={"그룹 및 사이트 설정"}>
            <Stack spacing={"12px"}>
                <Row>
                    <RowLeftTypo>기본 그룹 설정</RowLeftTypo>
                    <CustomSelector
                        items={groupItems}
                        value={group}
                        onChange={(e) => handleGroupChange(e.target.value)}
                    />
                </Row>

                <Row>
                    <RowLeftTypo>기본 사이트 설정</RowLeftTypo>
                    <CustomSelector
                        items={siteItems}
                        value={site}
                        onChange={(e) => handleSiteChange(e.target.value)}
                    />
                </Row>
            </Stack>
        </SettingSectionTemplate>
    );
};

const Row = ({ children }) => (
    <Stack
        direction={"row"}
        whiteSpace={"nowrap"}
        alignItems={"center"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);

const RowLeftTypo = ({ children }) => (
    <Typography width={"200px"} textAlign={"end"}>
        {children}
    </Typography>
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
