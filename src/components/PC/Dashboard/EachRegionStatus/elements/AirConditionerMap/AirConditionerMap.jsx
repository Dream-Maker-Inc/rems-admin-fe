import { Stack, Typography } from "@mui/material";
import { Map } from "../Map";

export const AirConditionerMap = () => {
    const colors = {
        running: "#569cd8",
        pause: "#a4a4a4",
    };

    const model = {
        left: [
            { title: "서울", runningCount: 423, pauseCount: 23 },
            { title: "경기도", runningCount: 423, pauseCount: 23 },
            { title: "충청남도", runningCount: 423, pauseCount: 23 },
            { title: "전라북도", runningCount: 423, pauseCount: 23 },
            { title: "전라남도", runningCount: 423, pauseCount: 23 },
        ],
        right: [
            { title: "강원도", runningCount: 423, pauseCount: 23 },
            { title: "충청북도", runningCount: 423, pauseCount: 23 },
            { title: "경상북도", runningCount: 423, pauseCount: 23 },
            { title: "경상남도", runningCount: 423, pauseCount: 23 },
            { title: "제주도", runningCount: 423, pauseCount: 23 },
        ],
    };

    const legends = [
        {
            color: colors.running,
            label: "가동 중",
        },
        {
            color: colors.pause,
            label: "미가동",
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

const ContentBox = ({ title, runningCount, pauseCount, running, pause }) => (
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
            <Stack component={"dd"} bgcolor={running} width={"100%"}>
                <Typography variant="h6">{runningCount}</Typography>
            </Stack>

            <Stack component={"dd"} bgcolor={pause} width={"100%"}>
                <Typography variant="h6">{pauseCount}</Typography>
            </Stack>
        </Stack>
    </Stack>
);
