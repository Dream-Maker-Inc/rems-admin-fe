import { Stack } from "@mui/material";

export const Row = ({ children }) => (
    <Stack
        direction={"row"}
        whiteSpace={"nowrap"}
        alignItems={"center"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);
