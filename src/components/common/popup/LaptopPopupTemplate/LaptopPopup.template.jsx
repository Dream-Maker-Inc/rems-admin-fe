import { CloseRounded } from "@mui/icons-material";
import {
    AppBar,
    Dialog,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";

export const LaptopPopupTemplate = ({ title, children, open, onClose }) => {
    return (
        <Dialog fullWidth open={open} onClose={onClose}>
            <Stack height={"100%"} overflow={"hidden"}>
                <AppBar position="static" elevation={0}>
                    <Toolbar
                        sx={{
                            bgcolor: "#394144",
                            justifyContent: "space-between",
                        }}
                    >
                        <div />

                        <Typography
                            variant="h6"
                            sx={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            {title}
                        </Typography>

                        <IconButton edge={"end"} onClick={onClose}>
                            <CloseRounded />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Stack bgcolor={"#303539"} height={"100%"} overflow={"auto"}>
                    {children}
                </Stack>
            </Stack>
        </Dialog>
    );
};
