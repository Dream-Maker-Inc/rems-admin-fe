import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { CardItemTemplate } from "../common/CardItemTemplate";
import { CardTemplate } from "../common/CardTemplate";

export const OperationalStatus = () => {
    const siteModel = {
        openedSiteCount: 312,
        inOperationSiteCount: 255,
    };

    const weatherModel = {
        weather: {
            icon: `${process.env.PUBLIC_URL}/assets/icons/ic_weather.png`,
            label: "날씨:비온뒤 갬",
        },
        temperature: {
            icon: `${process.env.PUBLIC_URL}/assets/icons/ic_temperature.png`,
            label: "온도:25.5°C",
        },
        humidity: {
            icon: `${process.env.PUBLIC_URL}/assets/icons/ic_humidity.png`,
            label: "습도:45%",
        },
        wind: {
            icon: `${process.env.PUBLIC_URL}/assets/icons/ic_wind.png`,
            label: "풍속:1.5m/s",
        },
    };
    const weatherDataArray = Object.values(weatherModel);
    const isLastWeatheItem = (index) => index === weatherDataArray.length - 1;

    return (
        <CardTemplate title={"냉난방기 작동 현황"}>
            <Stack spacing={"16px"} textAlign={"center"}>
                <CardItemTemplate title={"현재 서울 날씨"}>
                    <WeatherListContainer>
                        {weatherDataArray.map((it, index) => (
                            <React.Fragment key={it.icon}>
                                <WeatherItem {...it} />
                                {!isLastWeatheItem(index) && (
                                    <VerticalDivider />
                                )}
                            </React.Fragment>
                        ))}
                    </WeatherListContainer>
                </CardItemTemplate>

                <Stack direction={"row"} spacing={"16px"}>
                    <CardItemTemplate title={"운영 중 사이트수"}>
                        <ValueTypo>{siteModel.openedSiteCount}</ValueTypo>
                    </CardItemTemplate>
                    <CardItemTemplate title={"가동 중 사이트수"}>
                        <ValueTypo>{siteModel.inOperationSiteCount}</ValueTypo>
                    </CardItemTemplate>
                </Stack>
            </Stack>
        </CardTemplate>
    );
};

const WeatherListContainer = ({ children }) => (
    <Stack
        component={"ul"}
        direction={"row"}
        justifyContent={"space-around"}
        spacing={"24px"}
    >
        {children}
    </Stack>
);

const WeatherItem = ({ icon, label }) => (
    <Stack alignItems={"center"} minWidth={"100px"} spacing={"4px"}>
        <img src={icon} alt={label} width={48} height={48} />
        <Typography color={"#eadd84"}>{label}</Typography>
    </Stack>
);

const VerticalDivider = () => (
    <Stack>
        <Divider orientation="vertical" />
    </Stack>
);

const ValueTypo = ({ variant = "h5", children }) => (
    <Typography variant={variant} fontWeight={600} color={"#569cd8"}>
        {children}
    </Typography>
);
