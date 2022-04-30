import { Button, Stack } from "@mui/material";

export const ActionButtons = ({ onSave, onCancel, onClose }) => {
    return (
        <Stack direction={"row"} spacing={"8px"}>
            <Button variant={"contained"} onClick={onSave}>
                저장
            </Button>

            <Stack color={"#aaa"}>
                <Button
                    variant={"outlined"}
                    color={"inherit"}
                    onClick={onCancel}
                >
                    취소
                </Button>
            </Stack>

            {onClose && (
                <Stack color={"#aaa"}>
                    <Button
                        variant={"outlined"}
                        color={"inherit"}
                        onClick={onClose}
                    >
                        닫기
                    </Button>
                </Stack>
            )}
        </Stack>
    );
};
