const createTempData = () => {
    const dates = [
        "2021-01-01",
        "2021-02-01",
        "2021-03-01",
        "2021-04-01",
        "2021-05-01",
        "2021-06-01",
        "2021-07-01",
        "2021-08-01",
    ];

    const data = dates.map((it) => ({
        value: Math.floor(Math.random() * 100),
        date: it,
    }));

    return data;
};

export const ColumnChartMockData = {
    unit: "kW", // y축 단위
    dates: [
        "21.01",
        "21.02",
        "21.03",
        "21.04",
        "21.05",
        "21.06",
        "21.07",
        "21.08",
    ], // x축 데이터 라벨
    items: [
        {
            name: "Type1",
            data: createTempData(),
        },
        {
            name: "Type2",
            data: createTempData(),
        },
    ],
};
