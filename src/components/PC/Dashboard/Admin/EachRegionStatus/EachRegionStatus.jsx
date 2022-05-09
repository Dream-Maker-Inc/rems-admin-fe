import {
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { CardTemplate } from "../../common/CardTemplate";
import { AirConditionerMap } from "./elements/AirConditionerMap/AirConditionerMap";
import { NotificationListMap } from "./elements/NotificationListMap/NotificationListMap";
import { PowerStatusMap } from "./elements/PowerStatusMap";
import { SiteListMap } from "./elements/SiteListMap";

export const EachRegionStatus = () => {
    const tabs = ["사이트 수", "전력", "냉난방기", "알람"];
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (v) => {
        if (v === null) return;
        if (tabIndex === v) return;

        setTabIndex(v);
    };

    return (
        <CardTemplate title={"지역별 현황"} width={"fit-content"}>
            <Stack width={"fit-content"}>
                <ToggleButtonGroup
                    exclusive
                    fullWidth
                    size={"small"}
                    color={"primary"}
                    sx={{
                        "& .Mui-selected": {
                            transition: "all ease-in-out 0.3s",
                            bgcolor: "#91a23c !important",
                        },
                    }}
                    value={tabIndex}
                    onChange={(_, v) => handleTabChange(v)}
                >
                    {tabs.map((it, index) => (
                        <ToggleButton key={it} value={index}>
                            <Typography>{it}</Typography>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>

                <Stack py={"36px"}>{selectMap(tabIndex)}</Stack>
            </Stack>
        </CardTemplate>
    );
};

const selectMap = (index) => {
    switch (index) {
        case 0:
            return <SiteListMap />;
        case 1:
            return <PowerStatusMap />;
        case 2:
            return <AirConditionerMap />;
        case 3:
            return <NotificationListMap />;
        default:
            return;
    }
};
