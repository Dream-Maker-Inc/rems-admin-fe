import { Stack, Typography } from "@mui/material";
import { Map } from "../Map";

export const NotificationListMap = () => {
    const colors = {
        issued: "#ed860d",
        confirmed: "#e1ba07",
        resolved: "#a4a4a4",
    };

    const model = {
        left: [
            {
                title: "서울",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "경기도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "충청남도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "전라북도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "전라남도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
        ],
        right: [
            {
                title: "강원도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "충청북도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "경상북도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "경상남도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
            {
                title: "제주도",
                issuedCount: 423,
                confirmedCount: 23,
                resolvedCount: 47,
            },
        ],
    };

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
        <Map
            leftItems={model.left.map((it) => (
                <ContentBox key={it.title} {...it} {...colors} />
            ))}
            rightItems={model.right.map((it) => (
                <ContentBox key={it.title} {...it} {...colors} />
            ))}
            legends={legends}
            unit={"(단위 : kWh)"}
        />
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
