import { Stack } from "@mui/material";
import { ControlCheckArea } from "../ControlCheckArea/ControlCheckArea";
import { Head } from "../Head";

export const GearControlView = () => {
    return (
        <Stack spacing={"16px"}>
            <Head />
            <ControlCheckArea />
        </Stack>
    );
};
