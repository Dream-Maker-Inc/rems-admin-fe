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
    const { title, data } = model;

    const series = [
        {
            name: title.label,
            data: data.map((it, index) => ({
                name: it.label,
                y: it.value,
                sliced: index === 0,
                selected: index === 0,
            })),
        },
    ];
    const colors = data.map((it) => it.color);
    const dataLabelDistance = !(data.length - 1) ? -70 : -35;

    const chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            backgroundColor: "transparent",
            width: 240,
            height: 240,
        },
        title: { style: { display: "none" } },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: { point: { valueSuffix: "%" } },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
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
                    style: { textOutline: false, fontSize: "1rem" },
                },
                showInLegend: true,
            },
        },
        series: series,
        legend: {
            itemStyle: { color: "#fff" },
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
    .highcharts-label {
        tspan {
            font-size: inherit !important;
        }
    }
`;
