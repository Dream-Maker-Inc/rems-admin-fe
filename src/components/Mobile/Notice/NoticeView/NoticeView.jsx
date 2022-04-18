import { Stack } from "@mui/material";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab";
import { NoticeItem } from "../NoticeItem/NoticeItem";

export const NoticeView = () => {
    return (
        <ScrollContainerWithTopFab>
            <Stack spacing={"16px"}>
                <NoticeItem />
                <NoticeItem />
                <NoticeItem />
                <NoticeItem />
                <NoticeItem />
                <NoticeItem />
                <NoticeItem />
            </Stack>
        </ScrollContainerWithTopFab>
    );
};
