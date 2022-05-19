import { Button, Stack, styled } from "@mui/material";
import { useState } from "react";
import { CustomTabs } from "../../common/CustomTabs/CustomTabs";
import { ControlMenu } from "../views/ControlMenu";
import { PartnerList } from "./PartnerList";

export const PartnerMenuView = () => {
    // tabs
    const tabItems = ["REMS 관제앱", "REMS 모바일앱"];
    const [tabIndex, setTabIndex] = useState(0);
    const tab = tabItems[tabIndex];
    const handleTabChange = (v) =>
        setTabIndex(tabItems.findIndex((it) => it === v));

    const getTabPanel = () => {
        switch (tabIndex) {
            case 0:
                return <ControlMenu />;
            case 1:
                return <ControlMenu />;
            default:
                return;
        }
    };

    // 협력사 목록
    const partners = ["보템", "캐리어"];
    const [partnerIndex, setPartnerIndex] = useState(0);
    const handlePatnerIndexChange = (index) => setPartnerIndex(index);
    const handlePartnerClick = (index) => {
        handlePatnerIndexChange(index);
        //TODO: Something
    };

    // button actions
    const handleSave = () => alert("save");
    const handleReset = () => alert("reset");

    return (
        <Root>
            <Inner>
                <PartnerList
                    partners={partners}
                    partnerIndex={partnerIndex}
                    handlePartnerClick={handlePartnerClick}
                />

                <Stack width={"100%"}>
                    <CustomTabs
                        items={tabItems}
                        value={tab}
                        onChange={(_, v) => handleTabChange(v)}
                    />

                    <TabPanel>
                        <PanelInner>{getTabPanel()}</PanelInner>
                    </TabPanel>
                </Stack>
            </Inner>

            <Buttons onSave={handleSave} onReset={handleReset} />
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    gap: 20px;
    padding: 24px;
`;

const Inner = styled(Stack)`
    flex-direction: row;
    width: 100%;
    gap: 20px;
`;

const TabPanel = styled(Stack)`
    background-color: #3a3f43;
    width: 100%;
    position: relative;
`;

const PanelInner = styled(Stack)`
    padding: 24px;
    overflow: hidden;
    z-index: 3;
`;

const Buttons = ({ onSave, onReset }) => {
    return (
        <Stack direction={"row"} spacing={"8px"} alignSelf={"flex-end"}>
            <Button variant={"contained"} size={"small"} onClick={onSave}>
                저장
            </Button>

            <Stack color={"#aaa"}>
                <Button
                    variant={"outlined"}
                    size={"small"}
                    color={"inherit"}
                    onClick={onReset}
                >
                    초기화
                </Button>
            </Stack>
        </Stack>
    );
};
