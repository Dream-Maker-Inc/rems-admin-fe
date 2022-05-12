import styled from "@emotion/styled";
import { Button, Stack, Tooltip } from "@mui/material";
import { laptopColor } from "../../../../../../themes/Color";
import { LineChartWithLegend } from "../../../../../common/charts/LineChartWithLegend";
import { ListWithPieChart } from "../../../../../common/charts/ListWithPieChart";
import { PieChart } from "../../../../../common/charts/ListWithPieChart/PieChart";
import { DataHighlight } from "../../../../../common/DataHighlight";
import { ExcelIcon } from "../../../../../common/icons";
import { LabelWithCircle } from "../../../../common/LabelWithCircle";

export const EnergyDataInfo = () => {
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
        gearUsages: [
            {
                label: "냉난방",
                value: 21,
                unit: "kWh",
            },
            {
                label: "환기(공조)",
                value: 3,
                unit: "kWh",
            },
            {
                label: "조명",
                value: 3,
                unit: "kWh",
            },
            {
                label: "기타",
                value: 3,
                unit: "kWh",
            },
        ],
    };
    const { energyProduction, energyUsage, gearUsages } = model;
    const gearUsagesPieChartData = gearUsages.map((it) => ({
        label: it.label,
        value: it.value,
    }));

    return (
        <Root>
            <Inner>
                <Stack spacing={"8px"}>
                    <Header title={"에너지원 별"} onExcelDownload={() => {}} />

                    <Row>
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
                    </Row>
                </Stack>

                <Stack spacing={"8px"}>
                    <Header
                        title={"에너지 사용 설비 별"}
                        onExcelDownload={() => {}}
                    />

                    <Stack bgcolor={"#4e5359"} borderRadius={"4px"} px={"24px"}>
                        <LineChartWithLegend />
                    </Stack>
                </Stack>

                <Stack spacing={"8px"} width={"100%"}>
                    <Header
                        title={"에너지 사용 설비 별"}
                        onExcelDownload={() => {}}
                    />

                    <Stack bgcolor={"#4e5359"} padding={"24px 24px 0 24px"}>
                        <Stack
                            direction={"row"}
                            width={"100%"}
                            spacing={"16px"}
                            justifyContent={"space-between"}
                        >
                            {gearUsages.map((it) => (
                                <DataHighlight
                                    key={it.label}
                                    title={it.label}
                                    valueLabel={`${it.value}${it.unit}`}
                                    color={laptopColor.secondary2}
                                />
                            ))}
                        </Stack>

                        <Stack direction={"row"}>
                            <PieChart
                                model={{
                                    title: {
                                        label: "에너지 사용량",
                                        color: laptopColor.quaternary,
                                    },
                                    data: gearUsagesPieChartData,
                                }}
                                size={300}
                            />

                            <LineChartWithLegend />
                        </Stack>
                    </Stack>
                </Stack>
            </Inner>
        </Root>
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
    gap: 24px;
`;

const Row = styled(Stack)`
    flex-direction: row;
    gap: 24px;
`;

const Header = ({ title, onExcelDownload }) => {
    return (
        <Stack direction="row" width="100%" justifyContent={"space-between"}>
            <LabelWithCircle title={title} />

            <Tooltip title={"엑셀 파일로 다운로드"}>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<ExcelIcon />}
                    onClick={onExcelDownload}
                >
                    다운로드
                </Button>
            </Tooltip>
        </Stack>
    );
};
