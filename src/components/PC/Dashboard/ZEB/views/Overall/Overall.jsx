import { Stack } from "@mui/material";
import { laptopColor } from "../../../../../../themes/Color";
import { ListWithPieChart } from "../../../../../common/charts/ListWithPieChart";

export const Overall = () => {
    const model = {
        energyProduction: {
            data: [
                {
                    label: "태양광",
                    value: 15,
                    color: "#2d918f",
                },
            ],
            unit: "kWh",
        },
        energyUsage: {
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
            unit: "kWh",
        },
    };
    const { energyProduction, energyUsage } = model;

    return (
        <Stack bgcolor={"#3a3f43"} padding={"24px"} width="100%">
            <Stack direction={"row"} spacing={"24px"}>
                <ListWithPieChart
                    model={{
                        title: {
                            label: "에너지 생산량",
                            color: laptopColor.secondary2,
                        },
                        data: energyProduction.data,
                        unit: energyProduction.unit,
                    }}
                />

                <ListWithPieChart
                    model={{
                        title: {
                            label: "에너지 사용량",
                            color: laptopColor.quaternary,
                        },
                        data: energyUsage.data,
                        unit: energyUsage.unit,
                    }}
                />
            </Stack>
        </Stack>
    );
};
