import styled from "@emotion/styled";
import { AppBar, Drawer, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

export const SlidingDrawer = ({ title, children }) => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const closeDrawer = () => setDrawerOpen(false);

    // drawer 가로 길이 고정값
    const drawerWidth = "1000px";

    return (
        <StyledDrawer
            anchor="right"
            drawerwidth={drawerWidth}
            open={drawerOpen}
            onClose={closeDrawer}
        >
            <Stack maxWidth={"100%"} overflow={"hidden"}>
                <DrawerAppbar title={title} />
                <Content>{children}</Content>
            </Stack>
        </StyledDrawer>
    );
};

const StyledDrawer = styled(Drawer)`
    & .MuiPaper-root {
        max-width: ${({ drawerwidth }) => drawerwidth};
    }
`;

const DrawerAppbar = ({ title }) => (
    <AppBar
        position="static"
        elevation={0}
        color={"transparent"}
        sx={{
            bgcolor: "#3a3f43",
            borderBottom: "1px solid #eeeeee11",
        }}
    >
        <Toolbar sx={{ justifyContent: "center" }}>
            <Typography variant="h6">{title}</Typography>
        </Toolbar>
    </AppBar>
);

const Content = ({ children }) => (
    <Stack padding={"16px"} height={"100%"} overflow={"auto"}>
        {children}
    </Stack>
);
