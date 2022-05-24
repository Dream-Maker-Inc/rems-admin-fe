import { Divider, Stack, Typography } from "@mui/material";
import { ItemCardTemplate } from "../../../common/ItemCardTemplate";
import { laptopColor } from "../../../../../../themes/Color";

export const GateWayCard = ({ hwVersion, fwVersion }) => {
    return (
        <ItemCardTemplate title={"게이트웨이"}>
            <Stack direction={"row"} py={"20px"}>
                <Stack width={"100%"} alignItems={"center"} spacing={"8px"}>
                    <Typography>H/W 버전</Typography>
                    <Typography variant="h5" color={laptopColor.secondary2}>
                        {hwVersion}
                    </Typography>
                </Stack>

                <Divider orientation="vertical" />

                <Stack width={"100%"} alignItems={"center"} spacing={"8px"}>
                    <Typography>F/W 버전</Typography>
                    <Typography variant="h5" color={laptopColor.secondary2}>
                        {fwVersion}
                    </Typography>
                </Stack>
            </Stack>
        </ItemCardTemplate>
    );
};
