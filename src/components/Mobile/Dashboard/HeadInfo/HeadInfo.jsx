import styled from "@emotion/styled";
import { SearchRounded } from "@mui/icons-material";
import { Divider, IconButton, Stack, Typography } from "@mui/material";

export const HeadInfo = () => {
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
    };
    const { date, weather, dust, temperature, siteName } = model;

    const moveSiteList = () => alert("move site list");

    return (
        <Root>
            <SiteNameWithSearchIcon
                siteName={siteName}
                onSearch={moveSiteList}
            />

            <CustomDivider />

            <DayInformation
                date={date}
                weather={weather}
                dust={dust}
                temperature={temperature}
            />
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack width={"100%"} p={"24px"} bgcolor={"primary.A200"} spacing={"16px"}>
        {children}
    </Stack>
);

const SiteNameWithSearchIcon = ({ siteName, onSearch }) => (
    <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"8px"}
    >
        <Typography variant="h6" color={"secondary"}>
            {siteName}
        </Typography>

        <IconButton
            size={"small"}
            sx={{
                bgcolor: "primary.main",
                width: "24px",
                height: "24px",
                padding: "4px",
            }}
            onClick={onSearch}
        >
            <SearchRounded
                htmlColor="#fff"
                sx={{ width: "100%", height: "100%" }}
            />
        </IconButton>
    </Stack>
);

const CustomDivider = styled(Divider)`
    background-color: #fff;
    opacity: 0.5;
`;

const DayInformation = ({ date, weather, dust, temperature }) => (
    <Stack color={"#fff"} alignItems={"center"} width={"100%"}>
        <Typography sx={{ opacity: 0.8 }}>{date}</Typography>
        <Stack
            direction={"row"}
            width={"100%"}
            alignItems={"flex-end"}
            justifyContent={"space-between"}
        >
            <ContentsWithLabel
                content={<Image src={weather.img} alt={weather.label} />}
                label={weather.label}
            />

            <ContentsWithLabel
                content={
                    <Image src={dust.img} alt={dust.label} padding={"8px"} />
                }
                label={dust.label}
            />

            <ContentsWithLabel
                content={
                    <Typography
                        variant="h6"
                        py={"24px"}
                    >{`${temperature.data}°C`}</Typography>
                }
                label={temperature.label}
            />
        </Stack>
    </Stack>
);

const ContentsWithLabel = ({ content, label }) => (
    <Stack alignItems={"center"}>
        {content}
        <Typography>{label}</Typography>
    </Stack>
);

const Image = ({ src, alt, padding, maxWidth = "80px" }) => {
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
