import { Stack, Typography } from "@mui/material";

export const DataHighlight = ({ title, valueLabel, color }) => {
    return (
        <Stack
            bgcolor="#3d4045"
            direction={"row"}
            justifyContent={"space-between"}
            borderRadius={"4px"}
            spacing={"8px"}
            padding={"12px 16px"}
            width={"100%"}
        >
            <Typography variant="subtitle1" fontWeight={400}>
                {title}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600} color={color}>
                {valueLabel}
            </Typography>
        </Stack>
    );
};
