import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { laptopColor } from "../../../../../../themes/Color";
import { ListWithPieChart } from "../../../../../common/charts/ListWithPieChart";
import { ItemCardTemplate } from "../../common/ItemCardTemplate";
import { BackgroundLineCanvas } from "./BgLineCanvas/BackgroundLineCanvas";
import { useBackGroundLineCanvas } from "./BgLineCanvas/useBackgroundLineCanvas";

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

    const { topBoxesRef, getTopBoxRef, secondRowBoxesRef, getSecondRowBoxRef } =
        useBackGroundLineCanvas();

    return (
        <Root>
            <Inner>
                <Row>
                    <Stack ref={getTopBoxRef(0)} width={"100%"}>
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
                    </Stack>

                    <Stack ref={getTopBoxRef(1)} width={"100%"}>
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
                </Row>

                <Stack mt={"48px"}>
                    <Row>
                        {summaryOfItems.map((it, index) => (
                            <Column
                                key={it.label}
                                ref={getSecondRowBoxRef(index)}
                            >
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
                    </Row>
                </Stack>
            </Inner>

            <BackgroundLineCanvas
                topBoxesRef={topBoxesRef}
                secondRowBoxesRef={secondRowBoxesRef}
            />
        </Root>
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

const Root = styled(Stack)`
    background-color: #3a3f43;
    width: 100%;
    position: relative;
`;

const Inner = styled(Stack)`
    padding: 24px;
    overflow: hidden;
    z-index: 3;
`;

const Row = styled(Stack)`
    flex-direction: row;
    gap: 24px;
`;

const Column = styled(Stack)`
    width: 100%;
    gap: 24px;
`;
