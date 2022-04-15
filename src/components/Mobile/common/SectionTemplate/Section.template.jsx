import { CircleOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const SectionTemplate = ({ title, padding = "20px", children }) => {
    return (
        <Stack width={"100%"} bgcolor={"#fff"} p={padding} spacing={"8px"}>
            <Stack direction={"row"} spacing={"4px"} alignItems={"center"}>
                <CircleOutlined
                    fontSize="small"
                    color={"primary"}
                    sx={{ padding: "2px" }}
                />
                <Typography variant="subtitle1" fontWeight={500}>
                    {title}
                </Typography>
            </Stack>
            {children}
        </Stack>
    );
};
