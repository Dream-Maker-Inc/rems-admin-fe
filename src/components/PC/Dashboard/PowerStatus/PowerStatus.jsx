import { Stack, Typography } from "@mui/material";
import { CardItemTemplate } from "../common/CardItemTemplate";
import { CardTemplate } from "../common/CardTemplate";

export const PowerStatus = () => {
    const model = {
        todayAverage: {
            value: 129,
            unit: "kWh",
        },
        yesterdayAverage: {
            value: 183,
            unit: "kWh",
        },
        thisMonthAverage: {
            value: 1243,
            unit: "kWh",
        },
    };
    const { todayAverage, yesterdayAverage, thisMonthAverage } = model;

    return (
        <CardTemplate title={"전력 현황"}>
            <Stack direction={"row"} spacing={"16px"} textAlign={"center"}>
                <CardItemTemplate title={"금일 평균 사용량"}>
                    <Row>
                        <ValueTypo>{todayAverage.value}</ValueTypo>
                        <ValueTypo variant={"body2"}>
                            {todayAverage.unit}
                        </ValueTypo>
                    </Row>
                </CardItemTemplate>
                <CardItemTemplate title={"어제 평균 사용량"}>
                    <Row>
                        <ValueTypo>{yesterdayAverage.value}</ValueTypo>
                        <ValueTypo variant={"body2"}>
                            {yesterdayAverage.unit}
                        </ValueTypo>
                    </Row>
                </CardItemTemplate>
                <CardItemTemplate title={"금월 평균 사용량"}>
                    <Row>
                        <ValueTypo>{thisMonthAverage.value}</ValueTypo>
                        <ValueTypo variant={"body2"}>
                            {thisMonthAverage.unit}
                        </ValueTypo>
                    </Row>
                </CardItemTemplate>
            </Stack>
        </CardTemplate>
    );
};

const Row = ({ children }) => (
    <Stack
        direction={"row"}
        alignItems={"baseline"}
        justifyContent={"center"}
        spacing={"4px"}
    >
        {children}
    </Stack>
);

const ValueTypo = ({ variant = "h5", children }) => (
    <Typography variant={variant} fontWeight={600} color={"#55af57"}>
        {children}
    </Typography>
);
