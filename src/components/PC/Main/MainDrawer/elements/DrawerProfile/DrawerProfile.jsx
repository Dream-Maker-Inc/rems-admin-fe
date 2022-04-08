import styled from "@emotion/styled";
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
    <Root>
      <ProfileSection>
        <Avatar src={profile.avatarUrl} alt={"avatar"} sx={{ color: "#fff" }} />

        <ProfileRight>
          <Typography>{profile.username}</Typography>
          <Button variant={"contained"} size={"small"} onClick={handleLogout}>
            로그아웃
          </Button>
        </ProfileRight>
      </ProfileSection>

      <SelctorSection>
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
      </SelctorSection>
    </Root>
  );
};

const Root = styled(Stack)`
  background-color: #383a3d;
  padding: 24px;
`;

const ProfileSection = styled(Stack)`
  flex-direction: row;
  gap: 16px;
`;

const ProfileRight = styled(Stack)`
  gap: 8px;
  align-items: flex-start;
`;

const SelctorSection = styled(Stack)`
  margin-top: 24px;
`;
