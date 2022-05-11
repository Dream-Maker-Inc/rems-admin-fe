import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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

export const PieChart = ({ model }) => {
    const series = [
        {
            name: model.title,
            data: model.data.map((it, index) => ({
                name: it.label,
                y: it.value,
                sliced: index === 0,
                selected: index === 0,
            })),
        },
    ];

    const chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            backgroundColor: "transparent",
        },
        title: {
            style: { display: "none" },
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            style: {
                fontSize: "1.4rem",
            },
        },
        accessibility: {
            point: { valueSuffix: "%" },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.percentage:.1f}%</b>",
                    distance: -50,
                    filter: {
                        property: "percentage",
                        operator: ">",
                        value: 4,
                    },
                    style: {
                        textOutline: false,
                        fontSize: "1.4rem",
                    },
                },
                showInLegend: true,
            },
        },
        series: series,
        legend: {
            itemStyle: { color: "#fff", fontSize: "1.2rem" },
            itemMarginBottom: 12,
        },
        credits: { enabled: false },
    };

    return (
        <ChartWrapper>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </ChartWrapper>
    );
};

const ChartWrapper = styled(Stack)`
    .highcharts-container,
    .highcharts-root {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 16/10.5;
    }

    .highcharts-label tspan {
        font-size: inherit !important;
    }
`;
