import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { LaptopPopupTemplate } from "../../../../common/popup/LaptopPopupTemplate";
import { Head } from "../Head/Head";
import { History } from "../History";

export const NotificationDetailPopup = () => {
    // popup open/close
    const [open, setOpen] = useState(true);
    const closePopup = () => setOpen(false);

    return (
        <LaptopPopupTemplate
            open={open}
            onClose={closePopup}
            title={"알람 상세"}
        >
            <Stack spacing={"12px"} padding={"24px"}>
                <Head />
                <History />

                <ButtonSection onClick={closePopup} />
            </Stack>
        </LaptopPopupTemplate>
    );
};

const ButtonSection = ({ onClick }) => (
    <Stack alignItems={"flex-end"} color={"#eeeeeecc"} pt={"8px"}>
        <Button
            variant="outlined"
            color={"inherit"}
            size={"small"}
            onClick={onClick}
        >
            닫기
        </Button>
    </Stack>
);
