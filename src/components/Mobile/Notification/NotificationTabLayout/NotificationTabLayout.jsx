import { Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab";

export const NotificationTabLayout = () => {
    // tabs
    const tabItems = ["발생", "확인", "조치"];
    const [tabValue, setTabValue] = useState(tabItems[0]);
    const handleTabChange = (v) => setTabValue(v);

    return (
        <Stack width={"100%"} height={"100%"} overflow={"hidden"}>
            <Tabs
                variant="fullWidth"
                sx={{ bgcolor: "#eee" }}
                value={tabValue}
                onChange={(_, v) => handleTabChange(v)}
            >
                {tabItems.map((it) => (
                    <Tab key={it} label={it} value={it} />
                ))}
            </Tabs>

            <ScrollContainerWithTopFab>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </ScrollContainerWithTopFab>
        </Stack>
    );
};
