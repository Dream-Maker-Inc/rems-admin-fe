import { Stack } from "@mui/material";
import { LabelWithCircle } from "../../../../common/LabelWithCircle";
import { UsageTableWithLineChart } from "./elements/UsageTableWithLineChart";

export const EnergyDetail = () => {
    const models = [
        {
            title: "메인 전력 사용량",
            contents: [
                {
                    table: {
                        title: "월별 사용량",
                    },
                    lineChart: {
                        title: "월별 상세 사용량",
                    },
                    data: Array.from({ length: 10 }, (_, index) => ({
                        id: index + 1,
                        date: "2021-09",
                        value: "242",
                    })),
                },
                {
                    table: {
                        title: "일별 사용량",
                    },
                    lineChart: {
                        title: "일별 상세 사용량",
                    },
                    data: Array.from({ length: 10 }, (_, index) => ({
                        id: index + 1,
                        date: "2021-09",
                        value: "22",
                    })),
                },
            ],
        },
        {
            title: "태양광 생산량",
            contents: [
                {
                    table: {
                        title: "월별 사용량",
                    },
                    lineChart: {
                        title: "월별 상세 사용량",
                    },
                    data: Array.from({ length: 10 }, (_, index) => ({
                        id: index + 1,
                        date: "2021-09",
                        value: "242",
                    })),
                },
            ],
        },
    ];

    const headers = [{ label: "연월" }, { label: "전력량" }];

    return (
        <Root>
            {models.map(({ title, contents }) => (
                <Section key={title}>
                    <LabelWithCircle title={title} />

                    <Row>
                        {contents.map((it, index) => (
                            <UsageTableWithLineChart
                                key={index}
                                headers={headers}
                                models={it.data}
                                y
                                tableTitle={it.table.title}
                                chartTitle={it.lineChart.title}
                            />
                        ))}
                    </Row>
                </Section>
            ))}
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack width={"100%"} spacing={"36px"} padding={"20px"}>
        {children}
    </Stack>
);

const Section = ({ children }) => (
    <Stack width={"100%"} spacing={"8px"}>
        {children}
    </Stack>
);

const Row = ({ children }) => <Stack spacing={"24px"}>{children}</Stack>;
