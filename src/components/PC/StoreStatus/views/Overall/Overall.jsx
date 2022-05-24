import { Stack } from "@mui/material";
import {
    EnergyUsageCard,
    GateWayCard,
    GearStatesCard,
    NotifiOverallCard,
    TimesCard,
    WeathersCard,
} from "./elements";

export const Overall = () => {
    const model = {
        gateway: {
            hwVersion: "1.0",
            fwVersion: "2.0",
        },
        times: {
            open: "09:00",
            close: "18:00",
        },
        weather: {
            temperature: {
                icon: `${process.env.PUBLIC_URL}/assets/icons/ic_temperature.png`,
                label: "온도:25.5°C",
            },
            dust: {
                icon: `${process.env.PUBLIC_URL}/assets/images/dust_bad.png`,
                label: "미세먼지:나쁨",
            },
        },
    };
    const { gateway, times, weather } = model;

    const globalGap = "20px";

    return (
        <Stack
            direction={"row"}
            width={"100%"}
            height={"100%"}
            padding={"20px"}
            spacing={globalGap}
        >
            <Stack width={"100%"} spacing={globalGap}>
                <Stack direction={"row"} spacing={globalGap}>
                    <GateWayCard
                        hwVersion={gateway.hwVersion}
                        fwVersion={gateway.fwVersion}
                    />
                    <TimesCard openTime={times.open} closeTime={times.close} />
                </Stack>

                <Stack direction={"row"} spacing={globalGap} mt={globalGap}>
                    <WeathersCard
                        temperature={weather.temperature}
                        dust={weather.dust}
                    />

                    <NotifiOverallCard />
                </Stack>

                <EnergyUsageCard />
            </Stack>

            <GearStatesCard />
        </Stack>
    );
};
