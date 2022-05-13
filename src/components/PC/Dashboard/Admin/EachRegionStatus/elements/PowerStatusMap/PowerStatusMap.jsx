import { Stack, Typography } from "@mui/material";
import { Map } from "../Map";

export const PowerStatusMap = () => {
    const colors = {
        active: "#56b058",
        inactive: "#a4a4a4",
    };

    const models = {
        seoul: {
            id: 1,
            title: "서울",
            siteCount: 423,
            color: "#000",
        },
        gyeongGi: {
            id: 2,
            title: "경기도",
            siteCount: 423,
            color: "#333",
        },
        chungNam: {
            id: 3,
            title: "충청남도",
            siteCount: 423,
            color: "tomato",
        },
        jeolLaBukDo: {
            id: 4,
            title: "전라북도",
            siteCount: 423,
            color: "blue",
        },
        jeolLaNamDo: {
            id: 5,
            title: "전라남도",
            siteCount: 423,
            color: "orange",
        },
        gangwon: {
            id: 6,
            title: "강원도",
            siteCount: 423,
            color: "tomato",
        },
        chungBuk: {
            id: 7,
            title: "충청북도",
            siteCount: 423,
            color: "blue",
        },
        gyeongBuk: {
            id: 8,
            title: "경상북도",
            siteCount: 423,
            color: "tomato",
        },
        gyeongNam: {
            id: 9,
            title: "경상남도",
            siteCount: 423,
            color: "orange",
        },
        jeju: {
            id: 10,
            title: "제주도",
            siteCount: 423,
            color: "red",
        },
    };

    const mapAreaModels = Object.values(models).map((it) => ({
        ...it,
        content: <ContentBox {...it} {...colors} />,
    }));

    const legends = [
        {
            color: colors.active,
            label: "전력(kWh)",
        },
    ];

    return <Map models={mapAreaModels} legends={legends} />;
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
