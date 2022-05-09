import { Stack, Typography } from "@mui/material";
import { Map } from "../Map";

export const PowerStatusMap = () => {
    const colors = {
        active: "#56b058",
        inactive: "#a4a4a4",
    };

    const model = {
        left: [
            { title: "서울", siteCount: 423 },
            { title: "경기도", siteCount: 423 },
            { title: "충청남도", siteCount: 0 },
            { title: "전라북도", siteCount: 423 },
            { title: "전라남도", siteCount: 423 },
        ],
        right: [
            { title: "강원도", siteCount: 0 },
            { title: "충청북도", siteCount: 423 },
            { title: "경상북도", siteCount: 423 },
            { title: "경상남도", siteCount: 423 },
            { title: "제주도", siteCount: 423 },
        ],
    };

    const legends = [
        {
            color: colors.active,
            label: "전력(kWh)",
        },
    ];

    return (
        <Map
            leftItems={model.left.map((it) => (
                <ContentBox key={it.title} {...it} {...colors} />
            ))}
            rightItems={model.right.map((it) => (
                <ContentBox key={it.title} {...it} {...colors} />
            ))}
            legends={legends}
        />
    );
};

const ContentBox = ({ title, siteCount, active, inactive }) => (
    <Stack component={"dl"} padding={"8px"} spacing={"8px"}>
        <Stack component={"dt"} width={"100%"} alignItems={"center"}>
            <Typography variant="h6">{title}</Typography>
        </Stack>

        <Stack
            direction={"row"}
            width={"100%"}
            textAlign={"center"}
            borderRadius={"4px"}
            overflow={"hidden"}
        >
            <Stack
                component={"dd"}
                bgcolor={!siteCount ? inactive : active}
                width={"100%"}
            >
                <Typography variant="h6">{siteCount}</Typography>
            </Stack>
        </Stack>
    </Stack>
);
