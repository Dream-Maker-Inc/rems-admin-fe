import { Collapse, Stack, Typography } from "@mui/material";
import { DrawerProfile } from "./elements/DrawerProfile";
import { Menus } from "./elements/Menus";

export const MainDrawer = ({ isOpen }) => {
  return (
    <Collapse orientation="horizontal" in={isOpen}>
      <Stack width={"260px"} pb={"48px"} bgcolor={"#232629"}>
        <Stack aria-label={"로고 섹션"} p={"12px 24px"} alignItems={"center"}>
          <Typography variant="h3" color={"primary"}>
            REMS
          </Typography>
        </Stack>

        <DrawerProfile />

        <Menus />
      </Stack>
    </Collapse>
  );
};
