export const usePieChart = (model) => {
    const size = 140;
    const { data } = model;

    const series = [
        {
            name: "",
            data: data.map((it, index) => ({
                name: it.label,
                y: it.value,
                sliced: index === 0,
                selected: index === 0,
            })),
        },
    ];
    const colors = data.map((it) => it.color);
    const dataLabelDistance = !(data.length - 1) ? -70 : -25;

    const chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            backgroundColor: "transparent",
            width: size,
            height: size,
            margin: [0, 0, 0, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
        },
        title: { style: { display: "none" } },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: { point: { valueSuffix: "%" } },
        plotOptions: {
            pie: {
                size: "100%",
                allowPointSelect: true,
                cursor: "pointer",
                colors: colors[0] && colors,
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
                        fontSize: "0.8rem",
                        color: "#ddd",
                    },
                },
                showInLegend: false,
            },
        },
        series: series,
        credits: { enabled: false },
    };

    return {
        chartOptions,
    };
};
