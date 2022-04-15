import { Stack, Typography } from "@mui/material";
import { SectionTemplate } from "../../../common/SectionTemplate";
import { LineChart } from "../../../../common/charts/LineChart";
import { PowerUsageInfo } from "../PowerUsageInfo";

export const PowerUsageSection = () => {
    return (
        <Root>
            <Title>메인</Title>

            <Stack spacing={"1px"}>
                <SectionTemplate
                    title={"전력 사용량 그래프"}
                    padding={"8px 20px"}
                >
                    <Stack pt={"8px"} maxHeight={"260px"}>
                        <LineChart />
                    </Stack>
                </SectionTemplate>

                <SectionTemplate
                    title={"전력 사용량 상세"}
                    padding={"8px 20px 20px 20px"}
                >
                    <PowerUsageInfo />
                </SectionTemplate>
            </Stack>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack width={"100%"} bgcolor={"#e3e3e3"}>
        {children}
    </Stack>
);

const Title = ({ children }) => (
    <Stack padding={"8px 20px"}>
        <Typography color={"primary"} fontWeight={500}>
            {children}
        </Typography>
    </Stack>
);
