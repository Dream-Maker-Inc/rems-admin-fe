import { Divider, Stack, Typography } from "@mui/material";
import { ItemCardTemplate } from "../../../common/ItemCardTemplate";

export const WeathersCard = ({ temperature, dust }) => {
    return (
        <ItemCardTemplate title={"실외 정보"} height={"100%"}>
            <Stack
                direction={"row"}
                height={"100%"}
                alignItems={"center"}
                py={"20px"}
            >
                <Stack width={"100%"}>
                    <WeatherItem
                        icon={temperature.icon}
                        label={temperature.label}
                    />
                </Stack>

                <Divider orientation="vertical" />

                <Stack width={"100%"}>
                    <WeatherItem icon={dust.icon} label={dust.label} />
                </Stack>
            </Stack>
        </ItemCardTemplate>
    );
};

const WeatherItem = ({ icon, label }) => (
    <Stack alignItems={"center"} minWidth={"100px"} spacing={"4px"}>
        <img src={icon} alt={label} width={48} height={48} />
        <Typography color={"#eadd84"}>{label}</Typography>
    </Stack>
);
