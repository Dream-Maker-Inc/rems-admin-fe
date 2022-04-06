import {
  Avatar,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ProfileBackgroundColor = "#383a3d";

export const DrawerProfile = () => {
  const [selectV, setSelectV] = useState("10");

  return (
    <Stack bgcolor={ProfileBackgroundColor} p={"24px"}>
      <Stack direction={"row"} spacing={"16px"}>
        <Avatar src={""} alt={"avatar"} sx={{ color: "#fff" }} />

        <Stack spacing={"8px"} alignItems={"flex-start"} pt={"8px"}>
          <Typography>시스템 관리자</Typography>
          <Button variant={"contained"} size={"small"}>
            로그아웃
          </Button>
        </Stack>
      </Stack>

      <Stack aria-label={"셀렉터 섹션"} mt={"24px"}>
        <Select
          size={"small"}
          value={selectV}
          onChange={(e) => setSelectV(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Stack>
    </Stack>
  );
};
