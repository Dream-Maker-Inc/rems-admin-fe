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

export const LineWithColumnChartMockData = {
    dates: [
        "21.01",
        "21.02",
        "21.03",
        "21.04",
        "21.05",
        "21.06",
        "21.07",
        "21.08",
    ],

    // 꺾은선 그래프 데이터
    splineModel: {
        unit: "kW",
        items: [
            {
                name: "신재생 에너지 생산량",
                data: createTempData(),
            },
            {
                name: "총 에너지 사용량",
                data: createTempData(),
            },
        ],
    },

    columnModel: {
        unit: "%",
        item: {
            name: "자립률",
            data: createTempData(),
        },
    },
};
