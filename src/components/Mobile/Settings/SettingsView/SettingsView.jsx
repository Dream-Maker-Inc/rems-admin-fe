import { Button, Stack } from "@mui/material";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab";
import { GroupSitesSetting } from "../GroupSitesSetting/GroupSitesSetting";
import { NotificationSetting } from "../NotificationSetting/NotificationSetting";
import { PasswordSetting } from "../PasswordSetting/PasswordSetting";

export const SettingsView = () => {
    const handleSave = () => alert("ok");

    return (
        <ScrollContainerWithTopFab>
            <Stack spacing={"16px"}>
                <NotificationSetting />
                <GroupSitesSetting />
                <PasswordSetting />

                <SaveButtonSection onClick={handleSave} />
            </Stack>
        </ScrollContainerWithTopFab>
    );
};

const SaveButtonSection = ({ onClick }) => (
    <Stack alignSelf={"center"} width={"100%"} padding={"8px 60px"}>
        <Button
            variant="contained"
            color={"secondary"}
            size={"large"}
            fullWidth
            sx={{ color: "primary.main" }}
            onClick={onClick}
        >
            저장
        </Button>
    </Stack>
);
