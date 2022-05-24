import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { ItemCardTemplate } from "../../../../common/ItemCardTemplate";
import { usePieChart } from "./usePieChart";

export const NotifiOverallCard = () => {
    const model = {
        data: [
            {
                label: "발생",
                value: 1,
                color: "#333",
            },
            {
                label: "확인",
                value: 1,
                color: "#666",
            },
            {
                label: "처리",
                value: 2,
                color: "#999",
            },
        ],
    };
    const { data } = model;
    const total = {
        label: "총",
        value: data.reduce((acc, curr) => (acc += curr.value), 0),
    };

    const { chartOptions } = usePieChart(model);

    return (
        <ItemCardTemplate title="알람 종합">
            <Stack
                direction={"row"}
                spacing={"16px"}
                padding={"16px 20px 16px 8px"}
            >
                <ChartWrapper>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartOptions}
                    />
                </ChartWrapper>

                <Stack width="100%" whiteSpace={"nowrap"}>
                    {data.map((it) => (
                        <InfoListItem
                            key={it.label}
                            label={it.label}
                            value={it.value}
                            color={it.color}
                        />
                    ))}
                    <InfoListItem label={total.label} value={total.value} />
                </Stack>
            </Stack>
        </ItemCardTemplate>
    );
};

const ChartWrapper = styled(Stack)`
    height: 100%;

    .highcharts-label {
        tspan {
            stroke-width: 1px !important;
            font-size: inherit !important;
        }
    }
`;

const InfoListItem = ({ label, value, color = "#fff" }) => {
    return (
        <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            spacing={"16px"}
            sx={{
                p: "4px",
                borderBottom: "3px dashed #eeeeee33",
            }}
        >
            <Typography>{label}</Typography>
            <Typography color={color}>{`${value}건`}</Typography>
        </Stack>
    );
};
