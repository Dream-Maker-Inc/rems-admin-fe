import { ArrowBackRounded } from "@mui/icons-material";
import {
    AppBar,
    Dialog,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";

export const PopupTemplate = ({ open, onClose, title, children }) => {
    return (
        <Dialog fullWidth open={open} onClose={onClose}>
            <Stack>
                <AppBar position="static" elevation={0}>
                    <Toolbar variant="dense">
                        <IconButton edge={"start"}>
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
        </Dialog>
    );
};
