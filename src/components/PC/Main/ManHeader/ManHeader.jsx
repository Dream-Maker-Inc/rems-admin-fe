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

export const ManHeader = () => {
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
    <AppBar position="static" elevation={1} sx={{ bgcolor: "#272c2f" }}>
      <Toolbar>
        <Stack
          position={"relative"}
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton onClick={handleSideMenuToggle}>
            {openSide ? <ArrowForwardRounded /> : <ArrowBackRounded />}
          </IconButton>

          <MainTitle>{title}</MainTitle>

          <Stack direction={"row"} spacing={"16px"} alignItems={"center"}>
            <Stack direction={"row"} spacing={"8px"}>
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
            </Stack>

            <Typography sx={{ opacity: 0.8 }}>{date}</Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

const MainTitle = ({ children }) => (
  <Typography
    variant="h6"
    position={"absolute"}
    left={"50%"}
    sx={{ transform: "translate(-50%)" }}
  >
    {children}
  </Typography>
);

const CustomBadge = ({ onClick, badgeCount, icon }) => (
  <IconButton onClick={onClick}>
    <Badge color="secondary" badgeContent={badgeCount}>
      {icon}
    </Badge>
  </IconButton>
);
