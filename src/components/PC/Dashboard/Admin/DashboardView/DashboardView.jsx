import { Stack } from "@mui/material";
import { AllSites } from "../AllSites";
import { PowerStatus } from "../PowerStatus";
import { OperationalStatus } from "../OperationalStatus";
import { EachRegionStatus } from "../EachRegionStatus";

export const DashboardView = () => {
    return (
        <Root>
            <Left>
                <AllSites />
                <PowerStatus />
                <OperationalStatus />
            </Left>

            <Stack height={"fit-content"}>
                <EachRegionStatus />
            </Stack>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        direction={"row"}
        height={"100%"}
        spacing={"24px"}
        bgcolor={"#303539"}
        padding={"24px"}
    >
        {children}
    </Stack>
);

const Left = ({ children }) => (
    <Stack width={"100%"} justifyContent={"space-between"} spacing={"24px"}>
        {children}
    </Stack>
);
