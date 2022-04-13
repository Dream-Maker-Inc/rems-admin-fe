import { DownloadRounded } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";

export const MoveTopFab = ({ visible, onClick }) => (
    <Zoom in={visible} unmountOnExit>
        <Fab
            color={"primary"}
            sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
                bgcolor: "primary.A200",
            }}
            onClick={onClick}
        >
            <DownloadRounded sx={{ transform: "rotate(180deg)" }} />
        </Fab>
    </Zoom>
);
