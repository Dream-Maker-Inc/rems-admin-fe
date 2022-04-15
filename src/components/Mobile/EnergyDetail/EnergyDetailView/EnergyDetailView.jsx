import { Stack } from "@mui/material";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab";
import { Head } from "../Head";
import { PowerUsageSection } from "../PowerUsage";

export const EnergyDetailView = () => {
    return (
        <ScrollContainerWithTopFab>
            <Stack spacing={"16px"}>
                <Head />

                <PowerUsageSection />
                <PowerUsageSection />
                <PowerUsageSection />
            </Stack>
        </ScrollContainerWithTopFab>
    );
};
