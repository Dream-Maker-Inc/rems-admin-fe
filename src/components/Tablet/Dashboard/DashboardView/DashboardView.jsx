import { Stack } from "@mui/material";
import "swiper/css";
import { ClusterView } from "../ClusterView/ClusterView";
import { DashboardSwiper } from "../DashboardSwiper";

export const DashboardView = () => {
    return (
        <Root>
            <DashboardSwiper>
                <ClusterView />
                <ClusterView />
                <ClusterView />
            </DashboardSwiper>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack width={"100%"} height={"100%"} justifyContent={"center"} py={"16px"}>
        {children}
    </Stack>
);
