import { CircleOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const LabelWithCircle = ({ title }) => (
    <Stack direction={"row"} alignItems={"center"} spacing={"8px"}>
        <CircleOutlined color="primary" sx={{ width: "16px" }} />
        <Typography variant="subtitle1">{title}</Typography>
    </Stack>
);
