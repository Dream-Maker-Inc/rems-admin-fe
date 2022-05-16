import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ColumnChartMockData } from "./ColumnChart.model";

export const ColumnChart = () => {
    const models = ColumnChartMockData;
    const { unit, items, dates } = models;

    const series = items.map((it) => ({
        name: it.name,
        data: it.data.map((it) => it.value),
    }));

    const chartOptions = {
        chart: {
            type: "column",
            backgroundColor: "none",
            spacingTop: 48,
            spacingBottom: 36,
            height: 300,
        },
        title: { text: "" },
        xAxis: {
            categories: dates,
            crosshair: true,
            labels: { style: { color: "#fff" } },
        },
        yAxis: {
            min: 0,
            title: { text: "" },
            labels: {
                format: `{value} ${unit}`,
                style: { color: "#fff" },
            },
        },
        plotOptions: {
            column: {
                borderWidth: 0,
            },
        },
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
        series: series,
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
