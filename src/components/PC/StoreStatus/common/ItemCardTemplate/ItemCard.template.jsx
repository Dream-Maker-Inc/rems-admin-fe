import { Stack, Typography } from "@mui/material";

export const ItemCardTemplate = ({ title, children, height, padding }) => {
    return (
        <Stack
            width={"100%"}
            height={height}
            borderRadius={"4px"}
            overflow={"hidden"}
        >
            <Stack
                direction={"row"}
                width="100%"
                justifyContent={"center"}
                padding={"8px 20px 8px 24px"}
                bgcolor={"#3f464c"}
            >
                <Typography fontWeight={600}>{title}</Typography>
            </Stack>

            <Stack bgcolor={"#4e5359"} padding={padding} height={height}>
                {children}
            </Stack>
        </Stack>
    );
};
