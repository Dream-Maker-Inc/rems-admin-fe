import { Stack } from "@mui/material";
import { CardTemplate } from "../common/CardTemplate";
import { AirConditionerMap } from "./elements/AirConditionerMap/AirConditionerMap";
import { SiteListMap } from "./elements/SiteListMap";

export const EachRegionStatus = () => {
    return (
        <CardTemplate title={"지역별 현황"}>
            <Stack>
                <div>tabs</div>

                {/* <AirConditionerMap /> */}
                {/* <SiteListMap /> */}
            </Stack>
        </CardTemplate>
    );
};
