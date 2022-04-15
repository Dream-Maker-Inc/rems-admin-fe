import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { LineChartMockData } from "./LineChart.model";

export const LineChart = () => {
    const models = LineChartMockData;

    //
    const { unit, items, dates } = models;

    const series = items.map((it) => ({
        name: it.name,
        data: it.data.map((it) => it.value),
    }));

    const cateories = dates;

    const options = {
        title: { text: "" },
        series: series,
        yAxis: {
            title: { text: "" },
            labels: { format: `{text} ${unit}` },
        },
        xAxis: {
            categories: cateories,
        },
        credits: { enabled: false },
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};
