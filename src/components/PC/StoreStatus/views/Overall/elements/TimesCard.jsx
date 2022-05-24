import { Divider, Stack, Typography } from "@mui/material";
import { ItemCardTemplate } from "../../../common/ItemCardTemplate";

export const TimesCard = ({ openTime, closeTime }) => {
    return (
        <ItemCardTemplate title={"영업 시간"}>
            <Stack direction={"row"} py={"20px"}>
                <Stack width={"100%"} alignItems={"center"} spacing={"8px"}>
                    <Typography>운영시작</Typography>
                    <Typography variant="h5" color={"#54b156"}>
                        {openTime}
                    </Typography>
                </Stack>

                <Divider orientation="vertical" />

                <Stack width={"100%"} alignItems={"center"} spacing={"8px"}>
                    <Typography>운영 종료</Typography>
                    <Typography variant="h5" color={"#54b156"}>
                        {closeTime}
                    </Typography>
                </Stack>
            </Stack>
        </ItemCardTemplate>
    );
};
