import { Stack } from "@mui/material";
import { CardTemplate } from "../common/CardTemplate";
import { AirConditionerMap } from "./elements/AirConditionerMap/AirConditionerMap";
import { PowerStatusMap } from "./elements/PowerStatusMap";
import { SiteListMap } from "./elements/SiteListMap";

export const EachRegionStatus = () => {
    return (
        <CardTemplate title={"지역별 현황"}>
            <Stack>
                <div>tabs</div>

                {/* <AirConditionerMap /> */}
                {/* <SiteListMap /> */}
                <PowerStatusMap />
            </Stack>
        </CardTemplate>
    );
};
