import styled from "@emotion/styled";
import { Button, Stack, Tooltip } from "@mui/material";
import { laptopColor } from "../../../../../../themes/Color";
import { LineChartWithLegend } from "../../../../../common/charts/LineChartWithLegend";
import { ListWithPieChart } from "../../../../../common/charts/ListWithPieChart";
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
    };
    const { energyProduction, energyUsage } = model;

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

                    <LineChartWithLegend />
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
