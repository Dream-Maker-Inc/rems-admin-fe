import { Stack } from "@mui/material";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab";
import { GroupSitesSetting } from "../GroupSitesSetting/GroupSitesSetting";
import { NotificationSetting } from "../NotificationSetting/NotificationSetting";
import { PasswordSetting } from "../PasswordSetting/PasswordSetting";

export const SettingsView = () => {
    return (
        <ScrollContainerWithTopFab>
            <Stack spacing={"16px"}>
                <NotificationSetting />
                <GroupSitesSetting />
                <PasswordSetting />
            </Stack>
        </ScrollContainerWithTopFab>
    );
};
