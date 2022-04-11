import {
  AppBar,
  Button,
  Dialog,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export const ControlPopupTemplate = ({ children, open, onClose, onClick }) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <Stack>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ bgcolor: "primary.main", justifyContent: "center" }}>
            <Typography variant="h6">설비 제어</Typography>
          </Toolbar>
        </AppBar>

        <Stack>
          {children}

          <Stack p={"36px 24px"}>
            <Button variant="contained" size={"large"} onClick={onClick}>
              제어
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};
