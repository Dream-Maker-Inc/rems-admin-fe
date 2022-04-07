import {
  Avatar,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const DrawerProfile = () => {
  // profile info
  const profile = {
    avatarUrl: "",
    username: "시스템 관리자",
  };

  // selector
  const selectorData = [
    {
      id: 1,
      name: "경로당",
    },
    {
      id: 2,
      name: "경로당1",
    },
    {
      id: 3,
      name: "경로당2",
    },
  ];
  const [selectValue, setSelectValue] = useState(selectorData[0].name);

  // logout
  const handleLogout = () => alert("todo logout");

  return (
    <Stack bgcolor={"#383a3d"} p={"24px"}>
      <Stack direction={"row"} spacing={"16px"}>
        <Avatar src={profile.avatarUrl} alt={"avatar"} sx={{ color: "#fff" }} />

        <Stack spacing={"8px"} alignItems={"flex-start"}>
          <Typography>{profile.username}</Typography>
          <Button variant={"contained"} size={"small"} onClick={handleLogout}>
            로그아웃
          </Button>
        </Stack>
      </Stack>

      <Stack aria-label={"셀렉터 섹션"} mt={"24px"}>
        <Select
          size={"small"}
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          {selectorData.map((it) => (
            <MenuItem key={it.id} value={it.name}>
              {it.name}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Stack>
  );
};
