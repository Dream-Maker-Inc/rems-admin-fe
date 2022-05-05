import { Stack, Typography } from "@mui/material";
import { CardItemTemplate } from "../common/CardItemTemplate";
import { CardTemplate } from "../common/CardTemplate";

export const AllSites = () => {
    const model = {
        totalSiteCount: 2042,
        installedCount: 324,
    };

    return (
        <CardTemplate title={"전체 사이트수"}>
            <Stack direction={"row"} spacing={"16px"} textAlign={"center"}>
                <CardItemTemplate title={"전체 사이트"}>
                    <ValueTypo>{model.totalSiteCount}</ValueTypo>
                </CardItemTemplate>
                <CardItemTemplate title={"설치 사이트"}>
                    <ValueTypo>{model.installedCount}</ValueTypo>
                </CardItemTemplate>
            </Stack>
        </CardTemplate>
    );
};

const ValueTypo = ({ children }) => (
    <Typography variant={"h5"} fontWeight={600} color={"#db9b1b"}>
        {children}
    </Typography>
);
