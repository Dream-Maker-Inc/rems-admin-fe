import { Stack, Typography } from "@mui/material";

export const SettingSectionTemplate = ({ title, children }) => {
    return (
        <Stack width={"100%"}>
            <Stack bgcolor={"#eee"} p={"8px 12px"}>
                <Typography variant="subtitle1" fontWeight={500} gutterBottom>
                    {title}
                </Typography>
            </Stack>
            <Stack bgcolor={"#fff"} p={"12px 16px"}>
                {children}
            </Stack>
        </Stack>
    );
};
