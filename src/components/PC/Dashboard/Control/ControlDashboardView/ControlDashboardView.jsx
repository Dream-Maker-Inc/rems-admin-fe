import { Stack } from "@mui/material";
import { DataGrid } from "../DataGrid/DataGrid";
import { Statistics } from "../Statistics/Statistics";

export const ControlDashboardView = () => {
    return (
        <Stack
            spacing={"24px"}
            width="100%"
            bgcolor={"#303539"}
            padding={"24px"}
        >
            <Statistics />

            <DataGrid />
        </Stack>
    );
};
