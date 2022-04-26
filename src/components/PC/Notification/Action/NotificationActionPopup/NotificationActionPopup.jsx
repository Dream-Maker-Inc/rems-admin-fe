import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { LaptopPopupTemplate } from "../../../../common/popup/LaptopPopupTemplate";
import { Body } from "../Body";
import { Head } from "../Head/Head";

export const NotificationActionPopup = () => {
    // popup open/close
    const [open, setOpen] = useState(true);
    const closePopup = () => setOpen(false);

    const handleSave = () => alert("save");

    return (
        <LaptopPopupTemplate
            open={open}
            onClose={closePopup}
            title={"알람 처리"}
        >
            <Stack spacing={"12px"} padding={"24px"}>
                <Head />
                <Body />

                <ButtonSection onClick={handleSave} onClose={closePopup} />
            </Stack>
        </LaptopPopupTemplate>
    );
};

const ButtonSection = ({ onClick, onClose }) => (
    <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        color={"#eeeeeecc"}
        pt={"8px"}
        spacing={"8px"}
    >
        <Button
            variant="contained"
            color={"primary"}
            size={"small"}
            onClick={onClick}
        >
            저장
        </Button>

        <Button
            variant="outlined"
            color={"inherit"}
            size={"small"}
            onClick={onClose}
        >
            닫기
        </Button>
    </Stack>
);
