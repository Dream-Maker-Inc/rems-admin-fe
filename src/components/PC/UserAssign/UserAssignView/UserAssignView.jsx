import { Button, Stack } from "@mui/material";
import { TransferList } from "./elements/TransferList/TransferList";
import { UnifiedSearch } from "./elements/UnifiedSearch/UnifiedSearch";

export const UserAssignView = () => {
    const handleSave = () => alert("save");
    const handleReset = () => alert("reset");

    return (
        <Stack width={"100%"} height={"100%"} spacing={"48px"} p={"24px"}>
            <UnifiedSearch />

            <Stack>
                <TransferList />

                <Stack mt={"16px"}>
                    <ButtonGroup onSave={handleSave} onReset={handleReset} />
                </Stack>
            </Stack>
        </Stack>
    );
};

const ButtonGroup = ({ onSave, onReset }) => (
    <Stack direction={"row"} spacing={"8px"} alignSelf={"flex-end"}>
        <Button variant={"contained"} size={"small"} onClick={onSave}>
            저장
        </Button>

        <Stack color={"#aaa"}>
            <Button
                variant={"outlined"}
                size={"small"}
                color={"inherit"}
                onClick={onReset}
            >
                초기화
            </Button>
        </Stack>
    </Stack>
);
