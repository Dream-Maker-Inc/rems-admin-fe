import { Button, Stack, Typography } from "@mui/material";

export const NotificationItem = () => {
    const model = {
        title: "편백 경로당",
        gear: "에어컨/거실1",
        date: "2021.01.01 09:00:00",
        error: "가동 에러",
        response: "방문", // optional
    };

    const button = {
        label: "확인",
        onClick: () => alert("ok"),
    };

    return (
        <Root>
            <Stack>
                <Typography variant="subtitle1" fontWeight={500}>
                    {model.title}
                </Typography>

                <Stack mt={"8px"} sx={{ opacity: 0.7 }}>
                    <Description>{model.gear}</Description>
                    <Description>{model.date}</Description>
                    <Description>{model.error}</Description>
                    {model.response && (
                        <Description>{model.response}</Description>
                    )}
                </Stack>
            </Stack>

            <Stack>
                <Button variant="contained" onClick={button.onClick}>
                    {button.label}
                </Button>
            </Stack>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        bgcolor={"#fff"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        spacing={"8px"}
        padding={"12px 16px"}
        borderBottom={"1px solid #eee"}
    >
        {children}
    </Stack>
);

const Description = ({ children }) => (
    <Typography>{`- ${children}`}</Typography>
);
