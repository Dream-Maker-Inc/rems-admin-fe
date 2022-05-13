import { Stack, Typography } from "@mui/material";
import { Map } from "../Map";

export const NotificationListMap = () => {
    const colors = {
        issued: "#ed860d",
        confirmed: "#e1ba07",
        resolved: "#a4a4a4",
    };

    const models = {
        seoul: {
            id: 1,
            title: "서울",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "#000",
        },
        gyeongGi: {
            id: 2,
            title: "경기도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "#333",
        },
        chungNam: {
            id: 3,
            title: "충청남도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "tomato",
        },
        jeolLaBukDo: {
            id: 4,
            title: "전라북도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "blue",
        },
        jeolLaNamDo: {
            id: 5,
            title: "전라남도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "orange",
        },
        gangwon: {
            id: 6,
            title: "강원도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "tomato",
        },
        chungBuk: {
            id: 7,
            title: "충청북도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "blue",
        },
        gyeongBuk: {
            id: 8,
            title: "경상북도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "tomato",
        },
        gyeongNam: {
            id: 9,
            title: "경상남도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "orange",
        },
        jeju: {
            id: 10,
            title: "제주도",
            issuedCount: 423,
            confirmedCount: 23,
            resolvedCount: 47,
            color: "red",
        },
    };

    const mapAreaModels = Object.values(models).map((it) => ({
        ...it,
        content: <ContentBox {...it} {...colors} />,
    }));

    const legends = [
        {
            color: colors.issued,
            label: "발생",
        },
        {
            color: colors.confirmed,
            label: "확인",
        },
        {
            color: colors.resolved,
            label: "처리",
        },
    ];

    return (
        <Map models={mapAreaModels} legends={legends} unit={"(단위 : kWh)"} />
    );
};

const ContentBox = ({
    title,
    issuedCount,
    confirmedCount,
    resolvedCount,
    ...colors
}) => (
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
            <Stack component={"dd"} bgcolor={colors.issued} width={"100%"}>
                <Typography variant="h6">{issuedCount}</Typography>
            </Stack>

            <Stack component={"dd"} bgcolor={colors.confirmed} width={"100%"}>
                <Typography variant="h6">{confirmedCount}</Typography>
            </Stack>

            <Stack component={"dd"} bgcolor={colors.resolved} width={"100%"}>
                <Typography variant="h6">{resolvedCount}</Typography>
            </Stack>
        </Stack>
    </Stack>
);
