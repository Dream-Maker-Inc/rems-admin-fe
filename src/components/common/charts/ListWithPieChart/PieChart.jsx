import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/**
const model = {
    title: {
        label: "사용량",
        color: laptopColor.quaternary
    },
    data: [
        {
            label: "전력",
            value: 20,
            color: "#63db72",
        },
        {
            label: "가스",
            value: 10,
            color: "#d56969",
        },
    ],
};
 */

export const PieChart = ({ model }) => {
    const series = [
        {
            name: model.title.label,
            data: model.data.map((it, index) => ({
                name: it.label,
                y: it.value,
                sliced: index === 0,
                selected: index === 0,
            })),
        },
    ];
    const colors = model.data.map((it) => it.color);

    const dataLabelDistance = !(model.data.length - 1) ? -150 : -55;

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
                fontSize: "1.6rem",
            },
        },
        accessibility: {
            point: { valueSuffix: "%" },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                size: "100%",
                colors: colors,
                borderColor: "#eeeeee33",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.percentage:.1f}%</b>",
                    distance: dataLabelDistance,
                    filter: {
                        property: "percentage",
                        operator: ">",
                        value: 4,
                    },
                    style: {
                        textOutline: false,
                        fontSize: "1.6rem",
                    },
                },
                showInLegend: true,
            },
        },
        series: series,
        legend: {
            itemStyle: { color: "#fff", fontSize: "1.6rem" },
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
        aspect-ratio: 16/10;
    }

    .highcharts-label {
        tspan {
            font-size: inherit !important;
        }
    }
`;
