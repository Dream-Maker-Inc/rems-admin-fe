import { AppBar, Collapse, Stack, Toolbar, Typography } from "@mui/material";
import { DrawerProfile } from "./elements/DrawerProfile";
import { Menus } from "./elements/Menus";

export const MainDrawer = ({ isOpen }) => {
  return (
    <Stack height={"100%"}>
      <CollapseAnimation isOpen={isOpen}>
        <Surface>
          <LogoSection />
          <DrawerProfile />
          <Menus />
        </Surface>
      </CollapseAnimation>
    </Stack>
  );
};

// 좌우 슬라이딩 애니메이션
const CollapseAnimation = ({ isOpen, children }) => (
  <Collapse orientation="horizontal" sx={{ height: "100%" }} in={isOpen}>
    {children}
  </Collapse>
);

// Drawer 배경
const Surface = ({ children }) => (
  <Stack
    minWidth={"260px"}
    height={"100%"}
    pb={"48px"}
    bgcolor={"#232629"}
    overflow={"scroll"}
  >
    {children}
  </Stack>
);

const LogoSection = () => (
  <AppBar position="static" elevation={1}>
    <Toolbar
      sx={{
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#23272a",
      }}
    >
      <Typography variant="h3" fontSize={"40px"} color={"primary"}>
        REMS
      </Typography>
    </Toolbar>
  </AppBar>
);
