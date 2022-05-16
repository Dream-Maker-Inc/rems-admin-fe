import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { LineWithColumnChartMockData } from "./LineWithColumnChart.model";

export const LineWithColumnChart = () => {
    const model = LineWithColumnChartMockData;
    const { dates, splineModel, columnModel } = model;
    const columnSeries = {
        name: columnModel.item.name,
        data: columnModel.item.data.map((it) => it.value),
        tooltip: { valueSuffix: ` ${columnModel.unit}` },
        type: "column",
        yAxis: 1,
    };
    const splineSeries = splineModel.items.map((it) => ({
        name: it.name,
        data: it.data.map((it) => it.value),
        tooltip: { valueSuffix: ` ${splineModel.unit}` },
    }));

    const chartOptions = {
        chart: {
            zoomType: "xy",
            backgroundColor: "none",
            spacingTop: 48,
            spacingBottom: 36,
            height: 300,
        },
        title: { text: "" },
        xAxis: [
            {
                categories: dates,
                crosshair: true,
                labels: { style: { color: "#fff" } },
            },
        ],
        yAxis: [
            {
                // 꺾은선 그래프 yAxis
                title: { text: "" },
                labels: {
                    format: `{value} ${splineModel.unit}`,
                    style: { color: "#fff" },
                },
            },
            {
                // 막대 그래프 yAxis
                title: { text: "" },
                labels: {
                    format: `{value} ${columnModel.unit}`,
                    style: {
                        color: Highcharts.getOptions().colors[0],
                    },
                },
                opposite: true, // 라벨 배치 반대편으로 바꾸기.
            },
        ],
        tooltip: { shared: true },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
            itemMarginBottom: 8,

            itemStyle: { color: "#fff" },
            itemHoverStyle: { color: "#aaa" },
            width: 130,
        },
        series: [
            {
                name: columnSeries.name,
                type: "column",
                yAxis: 1,
                data: columnSeries.data,
                tooltip: { valueSuffix: ` ${columnModel.unit}` },
            },
            ...splineSeries,
        ],
        credits: { enabled: false },
    };

    return (
        <ChartWrapper>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </ChartWrapper>
    );
};

const ChartWrapper = styled(Stack)`
    width: 100%;
    color: #fff;
    border-radius: 4px;
`;
