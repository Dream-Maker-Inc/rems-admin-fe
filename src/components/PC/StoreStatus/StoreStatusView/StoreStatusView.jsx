import { Stack } from "@mui/material";
import { useState } from "react";
import { CustomTabs } from "../../common/CustomTabs";
import { SiteSearch } from "../common/SiteSearch/SiteSearch";
import { Overall, EnergyDetail, GearDetail } from "../views";

export const StoreStatusView = () => {
    const tabItems = ["종합", "에너지 상세", "설비 상세", "알람"];
    const [tab, setTab] = useState(tabItems[0]);
    const tabIndex = tabItems.findIndex((it) => it === tab);
    const handleTabChange = (v) => setTab(v);

    const getTabPanel = () => {
        switch (tabIndex) {
            case 0:
                return <Overall />;
            case 1:
                return <EnergyDetail />;
            case 2:
                return <GearDetail />;
            case 3:
                return;
            default:
                return;
        }
    };

    return (
        <Root>
            <SiteSearch />

            <Stack>
                <CustomTabs
                    items={tabItems}
                    value={tab}
                    onChange={(_, v) => handleTabChange(v)}
                />

                <ContentWrapper>{getTabPanel()}</ContentWrapper>
            </Stack>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack width={"100%"} height={"100%"} spacing={"24px"} padding={"24px"}>
        {children}
    </Stack>
);

const ContentWrapper = ({ children }) => (
    <Stack width={"100%"} height={"100%"} bgcolor={"#3a3f43"}>
        {children}
    </Stack>
);
