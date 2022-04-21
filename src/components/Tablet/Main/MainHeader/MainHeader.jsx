import styled from "@emotion/styled";
import {
    CampaignRounded,
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

export const MainHeader = () => {
    const model = {
        date: "4월 23일 금요일 오후 03:00",
        weather: {
            img: `${process.env.PUBLIC_URL}/assets/images/weather.png`,
            label: "흐림",
        },
        dust: {
            img: `${process.env.PUBLIC_URL}/assets/images/dust_good.png`,
            label: "미세먼지 좋음",
        },
        temperature: {
            data: "12.0",
            label: "실외온도",
        },
        siteName: "편백경로당",
        badges: {
            notice: false,
            notification: true,
        },
    };
    const { date, weather, dust, temperature, siteName, badges } = model;

    const handleNoticeClick = () => alert("notice");
    const handleNotificationClick = () => alert("notification");

    return (
        <AppBar position="static" elevation={1}>
            <CustomToolbar>
                <Inner>
                    <DateCell maxWidth={"120px"}>
                        <DateTypo>{date}</DateTypo>
                    </DateCell>

                    <Cell>
                        <Image src={weather.img} alt={weather.label} />
                        <Desc>{weather.label}</Desc>
                    </Cell>

                    <Cell>
                        <Image src={dust.img} alt={dust.label} />
                        <Desc>{dust.label}</Desc>
                    </Cell>

                    <Cell>
                        <Desc>{temperature.label}</Desc>
                        <Typography>{`${temperature.data}°C`}</Typography>
                    </Cell>

                    <Cell>
                        <SiteNametypo>{siteName}</SiteNametypo>
                    </Cell>

                    <Badges>
                        <CustomBadge
                            onClick={handleNoticeClick}
                            badgeCount={badges.notice ? "N" : undefined}
                            icon={
                                <CampaignRounded
                                    htmlColor="#fff"
                                    sx={{ transform: "scale(1.2)" }}
                                />
                            }
                        />

                        <CustomBadge
                            onClick={handleNotificationClick}
                            badgeCount={badges.notification ? "N" : undefined}
                            icon={
                                <NotificationsActiveRounded htmlColor="#fff" />
                            }
                        />
                    </Badges>
                </Inner>
            </CustomToolbar>
        </AppBar>
    );
};

const CustomToolbar = ({ children }) => (
    <Toolbar
        disableGutters
        sx={{
            bgcolor: "primary.A200",
            borderBottom: "1px solid #eeeeee33",
            px: "8px",
        }}
    >
        {children}
    </Toolbar>
);

const Inner = styled(Stack)`
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const DateCell = styled(Stack)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 48px;
    border-right: 1px solid #eeeeee66;
    padding: 8px;
`;

const Cell = styled(Stack)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 48px;
    border-right: 1px solid #eeeeee66;
    padding: 8px 16px;
`;

const DateTypo = ({ children }) => (
    <Typography variant="body2" sx={{ opacity: 0.8 }}>
        {children}
    </Typography>
);

const Desc = ({ children }) => (
    <Typography sx={{ opacity: 0.8 }} whiteSpace={"nowrap"}>
        {children}
    </Typography>
);

const SiteNametypo = ({ children }) => (
    <Typography variant="subtitle1" color={"secondary"} whiteSpace={"nowrap"}>
        {children}
    </Typography>
);

const Image = ({ src, alt, padding, maxWidth = "48px" }) => {
    return (
        <Stack
            width={"100%"}
            maxWidth={maxWidth}
            padding={padding}
            sx={{ aspectRatio: "1/1" }}
        >
            <StretchedImage src={src} alt={alt} />
        </Stack>
    );
};
const StretchedImage = styled("img")`
    width: 100%;
    height: 100%;
`;

const Badges = ({ children }) => (
    <Stack direction={"row"} padding={"8px"} spacing={"2px"}>
        {children}
    </Stack>
);

const CustomBadge = ({ onClick, badgeCount, icon }) => (
    <IconButton onClick={onClick}>
        <Badge color="error" badgeContent={badgeCount}>
            {icon}
        </Badge>
    </IconButton>
);
