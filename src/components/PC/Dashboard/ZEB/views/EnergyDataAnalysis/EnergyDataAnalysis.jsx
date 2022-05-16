import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { ChartHeaderWithExcelButton } from "../../../../../common/charts/ChartHeaderWithExcelButton";
import { ColumnChart } from "../../../../../common/charts/ColumnChart";
import { LineChartWithLegend } from "../../../../../common/charts/LineChartWithLegend";
import { LineWithColumnChart } from "../../../../../common/charts/LineWithColumnChart";

export const EnergyDataAnalysis = () => {
    return (
        <Root>
            <Inner>
                <SectionContainer>
                    <ChartHeaderWithExcelButton
                        title={"에너지 자립률"}
                        onExcelDownload={() => {}}
                    />

                    <ChartWrapper>
                        <LineWithColumnChart />
                    </ChartWrapper>
                </SectionContainer>

                <SectionContainer>
                    <ChartHeaderWithExcelButton
                        title={"과거 대비 사용 현황"}
                        onExcelDownload={() => {}}
                    />

                    <ChartWrapper>
                        <ColumnChart />
                    </ChartWrapper>
                </SectionContainer>

                <SectionContainer>
                    <ChartHeaderWithExcelButton
                        title={"단위 면적당 에너지 사용량"}
                        onExcelDownload={() => {}}
                    />

                    <ChartWrapper>
                        <ColumnChart />
                    </ChartWrapper>
                </SectionContainer>

                <SectionContainer>
                    <ChartHeaderWithExcelButton
                        title={"목표 기준 비교 분석"}
                        onExcelDownload={() => {}}
                    />

                    <ChartWrapper>
                        <LineChartWithLegend />
                    </ChartWrapper>
                </SectionContainer>
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

const SectionContainer = styled(Stack)`
    gap: 8px;
`;

const ChartWrapper = styled(Stack)`
    background-color: #4e5359;
    border-radius: 4px;
    padding: 0 24px;
`;
