import { AppBar, Drawer, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Menus } from "./elements/Menus/Menus";

export const MainDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
      <Header />
      <Menus />
    </Drawer>
  );
};

const Header = () => (
  <Stack minWidth={"240px"}>
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ bgcolor: "primary.main", justifyContent: "center" }}>
        <Typography variant="h6">TNM</Typography>
      </Toolbar>
    </AppBar>
  </Stack>
);
