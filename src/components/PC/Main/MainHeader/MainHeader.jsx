import styled from "@emotion/styled";
import {
  ArrowBackRounded,
  ArrowForwardRounded,
  MicRounded,
  NotificationsActiveRounded,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const MainHeader = () => {
  const title = "화면레이아웃";
  const date = "2021.09.27 10:30";

  // 사이드 메뉴 토글
  const [openSide, setOpenSide] = useState(false);
  const handleSideMenuToggle = () => setOpenSide((old) => !old);

  // 뱃지
  const notificationCount = 90;
  const handleNotificationBadgeClick = () => alert("todo notification");

  const micCount = 10;
  const handleMicBadgeClick = () => alert("todo mic");

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ bgcolor: "#272c2f" }}>
        <Inner>
          <IconButton onClick={handleSideMenuToggle}>
            {openSide ? <ArrowForwardRounded /> : <ArrowBackRounded />}
          </IconButton>

          <AppbarTitle>{title}</AppbarTitle>

          <AppbarRight>
            <IconSection>
              <CustomBadge
                onClick={handleNotificationBadgeClick}
                badgeCount={notificationCount}
                icon={<NotificationsActiveRounded />}
              />

              <CustomBadge
                onClick={handleMicBadgeClick}
                badgeCount={micCount}
                icon={<MicRounded />}
              />
            </IconSection>

            <Typography sx={{ opacity: 0.8 }}>{date}</Typography>
          </AppbarRight>
        </Inner>
      </Toolbar>
    </AppBar>
  );
};

const Inner = styled(Stack)`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AppbarTitle = ({ children }) => (
  <Typography
    variant="h6"
    position={"absolute"}
    left={"50%"}
    sx={{ transform: "translate(-50%)" }}
  >
    {children}
  </Typography>
);

const AppbarRight = styled(Stack)`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const IconSection = styled(Stack)`
  flex-direction: row;
  gap: 8px;
`;

const CustomBadge = ({ onClick, badgeCount, icon }) => (
  <IconButton onClick={onClick}>
    <Badge color="secondary" badgeContent={badgeCount}>
      {icon}
    </Badge>
  </IconButton>
);
