import { Stack } from "@mui/material";
import { Head } from "../../Head";
import { NotificationTabLayout } from "../../NotificationTabLayout";

export const NotificationView = () => {
    return (
        <Stack width={"100%"} height={"100%"} spacing={"16px"}>
            <Head />

            <NotificationTabLayout />
        </Stack>
    );
};
