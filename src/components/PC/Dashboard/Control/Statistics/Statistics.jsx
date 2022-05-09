import { Stack, Typography } from "@mui/material";
import { laptopColor } from "../../../../../themes/Color";
import { CardItemTemplate } from "../../common/CardItemTemplate";

export const Statistics = () => {
    const model = {
        totalCount: "15",
        occurredCount: "3",
        confirmedCount: "9",
        solvedCount: "3",
        processingStatus: {
            rate: "20%",
            unsolved: "12건",
        },
    };
    const {
        totalCount,
        occurredCount,
        confirmedCount,
        solvedCount,
        processingStatus,
    } = model;

    return (
        <Root>
            <CardItemTemplate title={"총 건수"}>
                <ValueLargeTypo color={"primary"}>{totalCount}</ValueLargeTypo>
            </CardItemTemplate>

            <CardItemTemplate title={"발생"}>
                <ValueLargeTypo color={laptopColor.secondary2}>
                    {occurredCount}
                </ValueLargeTypo>
            </CardItemTemplate>

            <CardItemTemplate title={"확인"}>
                <ValueLargeTypo color={laptopColor.tertiary}>
                    {confirmedCount}
                </ValueLargeTypo>
            </CardItemTemplate>

            <CardItemTemplate title={"처리"}>
                <ValueLargeTypo color={laptopColor.quaternary}>
                    {solvedCount}
                </ValueLargeTypo>
            </CardItemTemplate>

            <CardItemTemplate title={"처리현황"}>
                <ProcessingStatusInner
                    resolvedRatio={processingStatus.rate}
                    unsolvedCount={processingStatus.unsolved}
                />
            </CardItemTemplate>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        width={"100%"}
        direction={"row"}
        spacing={"24px"}
        textAlign={"center"}
        bgcolor={"#3a3f43"}
        borderRadius={"4px"}
        padding={"24px"}
    >
        {children}
    </Stack>
);

const ValueLargeTypo = ({ color, children }) => (
    <Typography variant={"h5"} fontWeight={"500"} color={color}>
        {children}
    </Typography>
);

const ProcessingStatusInner = ({ resolvedRatio, unsolvedCount }) => (
    <Stack spacing={"4px"}>
        <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
        >
            <Typography>처리율</Typography>
            <Typography color={"#e7dd86"}>{resolvedRatio}</Typography>
        </Stack>
        <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
        >
            <Typography>미처리</Typography>
            <Typography color={"#e7dd86"}>{unsolvedCount}</Typography>
        </Stack>
    </Stack>
);
