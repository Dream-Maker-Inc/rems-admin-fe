import styled from "@emotion/styled";
import { ArrowBackRounded } from "@mui/icons-material";
import {
    AppBar,
    Dialog,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";

export const PopupTemplate = ({
    open,
    onClose,
    title,
    children,
    height = "100%",
}) => {
    return (
        <StyledDialog fullWidth open={open} onClose={onClose} height={height}>
            <Stack height={"100%"}>
                <AppBar position="static" elevation={0}>
                    <Toolbar variant="dense">
                        <IconButton edge={"start"} onClick={onClose}>
                            <ArrowBackRounded htmlColor="#fff" />
                        </IconButton>

                        <Typography
                            variant="h6"
                            position={"absolute"}
                            left={"50%"}
                            sx={{
                                transform: "translateX(-50%)",
                            }}
                        >
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>

                {children}
            </Stack>
        </StyledDialog>
    );
};

const StyledDialog = styled(Dialog)`
    & .MuiPaper-root[role="dialog"] {
        height: ${({ height }) => height};
    }
`;
