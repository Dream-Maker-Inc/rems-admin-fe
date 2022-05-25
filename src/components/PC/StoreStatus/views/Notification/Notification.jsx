import { Button, Stack } from "@mui/material";
import { Table, UnifiedSearch } from "./elements";

export const Notification = () => {
    const handleDetail = () => alert("detail");
    const handleConfirm = () => alert("confirm");
    const handleSolve = () => alert("solve");

    return (
        <Stack width={"100%"} spacing={"24px"} padding={"20px"}>
            <UnifiedSearch />
            <Table />

            <Stack direction={"row"} spacing={"8px"} alignSelf={"flex-end"}>
                <Button variant="contained" onClick={handleDetail}>
                    상세
                </Button>
                <Button variant="contained" onClick={handleConfirm}>
                    확인
                </Button>
                <Button variant="contained" onClick={handleSolve}>
                    처리
                </Button>
            </Stack>
        </Stack>
    );
};
