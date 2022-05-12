import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { useState } from "react";
import { SiteSearchWithDate } from "../../../SearchGrid/SiteSearchWithDate";
import { CustomTabs } from "../common/CustomTabs";
import { Overall } from "../views/Overall";

export const ZEBDashboardView = () => {
    const tabItems = [
        "건물전체",
        "에너지 데이터 조회",
        "에너지 데이터 분석",
        "비용 조회",
        "계측기 이력",
    ];
    const [tab, setTab] = useState(tabItems[0]);
    const handleTabChange = (v) => setTab(v);

    return (
        <Root>
            <SiteSearchWithDate />

            <Stack>
                <CustomTabs
                    items={tabItems}
                    value={tab}
                    onChange={(_, v) => handleTabChange(v)}
                />
                <Overall />
            </Stack>
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    gap: 48px;
    padding: 24px;
    overflow: auto;
`;
