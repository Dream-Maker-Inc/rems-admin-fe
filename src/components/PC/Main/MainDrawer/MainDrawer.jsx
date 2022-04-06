import { Collapse, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { DrawerProfile } from "./elements/DrawerProfile";
import { Menus } from "./elements/Menus";

const SurfaceColor = "#232629";

export const MainDrawer = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Stack direction={"row"}>
      <Collapse orientation="horizontal" in={checked}>
        <Stack width={"260px"} bgcolor={SurfaceColor}>
          <Stack aria-label={"로고 섹션"} p={"12px 24px"} alignItems={"center"}>
            <Typography variant="h3" color={"primary"}>
              REMS
            </Typography>
          </Stack>

          <DrawerProfile />

          <Stack>
            <Menus />
          </Stack>
        </Stack>
      </Collapse>

      <button
        onClick={() => setChecked((old) => !old)}
        style={{ height: "fit-content" }}
      >
        toggle
      </button>
    </Stack>
  );
};
