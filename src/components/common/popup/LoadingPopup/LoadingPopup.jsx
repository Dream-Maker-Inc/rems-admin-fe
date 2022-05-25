import styled from "@emotion/styled";
import { CircularProgress, Dialog, Stack, Typography } from "@mui/material";
import { laptopColor } from "../../../../themes/Color";

export const LoadingPopup = () => {
    return (
        <StyledDialog open={true} fullScreen>
            <Stack
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={"12px"}
            >
                <CircularProgress size={"80px"} />

                <Typography
                    fontWeight={600}
                    sx={{ textShadow: `1px 1px 15px ${laptopColor.primary}` }}
                >
                    Loading...
                </Typography>
            </Stack>
        </StyledDialog>
    );
};

const StyledDialog = styled(Dialog)`
    & .MuiPaper-root {
        background-color: transparent;
        background-image: none;
    }
`;
