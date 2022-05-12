import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { LineChartWithLegendMockData } from "./LineChartWithLegend.model";

export const LineChartWithLegend = () => {
    const models = LineChartWithLegendMockData;
    const { unit, items, dates } = models;

    const series = items.map((it) => ({
        name: it.name,
        data: it.data.map((it) => it.value),
    }));

    const categories = dates;

    const chartOptions = {
        chart: {
            backgroundColor: "none",
            spacingTop: 48,
            spacingBottom: 36,
            height: 300,
        },
        title: { style: { display: "none" } },

        yAxis: {
            title: { text: "" },
            labels: { format: `{text} ${unit}`, style: { color: "#fff" } },
        },
        xAxis: { categories: categories, labels: { style: { color: "#fff" } } },

        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
            itemMarginBottom: 8,

            itemStyle: { color: "#fff" },
            itemHoverStyle: { color: "#aaa" },
        },

        series: series,
        credits: { enabled: false },

        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        legend: {
                            layout: "horizontal",
                            align: "center",
                            verticalAlign: "bottom",
                        },
                    },
                },
            ],
        },
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
