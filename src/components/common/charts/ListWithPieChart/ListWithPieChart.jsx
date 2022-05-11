import { Stack, Typography } from "@mui/material";
import { laptopColor } from "../../../../themes/Color";
import { PieChart } from "./PieChart";

/**
const model = {
    title: "사용량",
    data: [
        {
            label: "가스",
            value: 10,
        },
        {
            label: "전력",
            value: 20,
        },
    ],
};
 */

export const ListWithPieChart = ({ model }) => {
    const totalValue = model.data.reduce((prev, curr) => prev + curr.value, 0);
    const totalValueLabel = `${totalValue.toFixed(1)} ${model.unit}`;

    return (
        <Root>
            <Left>
                <LeftHeader>
                    <Typography variant="h6" fontWeight={400}>
                        {model.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        color={laptopColor.quaternary}
                    >
                        {totalValueLabel}
                    </Typography>
                </LeftHeader>

                <Scrollable>
                    {model.data.map((it, index) => (
                        <LeftItemRow
                            key={index}
                            label={it.label}
                            value={it.value}
                            unit={model.unit}
                        />
                    ))}
                </Scrollable>
            </Left>

            <ChartContainer>
                <PieChart model={model} />
            </ChartContainer>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        direction={"row"}
        width="100%"
        bgcolor="#4e5359"
        maxHeight={"300px"}
        padding={"24px"}
        overflow={"hidden"}
    >
        {children}
    </Stack>
);

const Left = ({ children }) => (
    <Stack width={"100%"} borderRadius={"4px"} overflow={"hidden"}>
        {children}
    </Stack>
);

const LeftHeader = ({ children }) => (
    <Stack
        bgcolor="#3d4045"
        direction={"row"}
        justifyContent={"space-between"}
        padding={"16px"}
    >
        {children}
    </Stack>
);

const Scrollable = ({ children }) => (
    <Stack overflow={"auto"} height="100%">
        {children}
    </Stack>
);

const LeftItemRow = ({ label, value, unit }) => {
    const valueLabel = `${value.toFixed(1)} ${unit}`;

    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            borderBottom={"1px solid #eeeeee55"}
            padding={"16px"}
        >
            <Typography>{label}</Typography>
            <Typography>{valueLabel}</Typography>
        </Stack>
    );
};

const ChartContainer = ({ children }) => (
    <Stack
        minWidth="400px"
        height="100%"
        overflow={"hidden"}
        position="relative"
        ml={"-60px"}
        mr={"-80px"}
    >
        {children}
    </Stack>
);
