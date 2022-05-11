import { Stack, Typography } from "@mui/material";
import { laptopColor } from "../../../../../../themes/Color";
import { ListWithPieChart } from "../../../../../common/charts/ListWithPieChart";
import { ItemCardTemplate } from "../../common/ItemCardTemplate";

export const Overall = () => {
    const model = {
        energyProduction: {
            data: [
                {
                    label: "태양광",
                    value: 15.0,
                    color: "#2d918f",
                },
            ],
            unit: "kWh",
        },
        energyUsage: {
            data: [
                {
                    label: "전력",
                    value: 20.0,
                    color: "#63db72",
                },
                {
                    label: "가스",
                    value: 10.0,
                    color: "#d56969",
                },
            ],
            unit: "kWh",
        },
        summaryOfItems: [
            {
                label: "냉난방",
                usage: {
                    value: 21.0,
                    unit: "kWh",
                    percentageOfTotal: 60.0,
                },
                gears: [
                    {
                        label: "실내기",
                        count: 4,
                    },
                    {
                        label: "실외기",
                        count: 1,
                    },
                ],
            },
            {
                label: "환기(공조)",
                usage: {
                    value: 3.0,
                    unit: "kWh",
                    percentageOfTotal: 10.0,
                },
                gears: [
                    {
                        label: "전열교환기",
                        count: 1,
                    },
                ],
            },
            {
                label: "조명",
                usage: {
                    value: 3.0,
                    unit: "kWh",
                    percentageOfTotal: 10.0,
                },
                gears: [
                    {
                        label: "건물전체",
                        count: 1,
                    },
                ],
            },
            {
                label: "기타",
                usage: {
                    value: 3.0,
                    unit: "kWh",
                    percentageOfTotal: 10.0,
                },
            },
        ],
    };
    const { energyProduction, energyUsage, summaryOfItems } = model;

    return (
        <Stack bgcolor={"#3a3f43"} padding={"24px"} width="100%">
            <Stack direction={"row"} spacing={"24px"}>
                <ListWithPieChart
                    model={{
                        title: {
                            label: "에너지 생산량",
                            color: laptopColor.secondary2,
                        },
                        data: energyProduction.data,
                        unit: energyProduction.unit,
                    }}
                />

                <ListWithPieChart
                    model={{
                        title: {
                            label: "에너지 사용량",
                            color: laptopColor.quaternary,
                        },
                        data: energyUsage.data,
                        unit: energyUsage.unit,
                    }}
                />
            </Stack>

            <Stack mt={"48px"}>
                <Stack direction={"row"} spacing={"24px"}>
                    {summaryOfItems.map((it) => (
                        <Column key={it.label}>
                            <TitleWithUsages
                                title={it.label}
                                label1={`${it.usage.value} ${it.usage.unit}`}
                                label2={`${it.usage.percentageOfTotal}%`}
                            />

                            {it.gears && (
                                <ItemCardTemplate
                                    rows={it.gears.map((it) => (
                                        <Typography
                                            key={it}
                                        >{`${it.label}(${it.count})`}</Typography>
                                    ))}
                                    innerPadding={"8px 16px"}
                                    height={"136px"}
                                />
                            )}
                        </Column>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

const TitleWithUsages = ({ title, label1, label2 }) => {
    return (
        <ItemCardTemplate
            rows={[
                <Stack
                    direction={"row"}
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Typography>{title}</Typography>

                    <Stack spacing={"4px"}>
                        <Typography fontWeight={500} color={"#eadc83"}>
                            {label1}
                        </Typography>
                        <Typography fontWeight={500} color={"#eadc83"}>
                            {label2}
                        </Typography>
                    </Stack>
                </Stack>,
            ]}
        ></ItemCardTemplate>
    );
};

const Column = ({ children }) => (
    <Stack spacing={"24px"} width={"100%"}>
        {children}
    </Stack>
);
