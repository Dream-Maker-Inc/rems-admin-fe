import { Stack, Typography } from "@mui/material";
import { ExcelDownloadButton } from "../../../../../../common/buttons/ExcelDownloadButton";

export const CostBoxTemplate = ({ title, onExcelClick, children }) => {
    return (
        <Stack width={"100%"} borderRadius={"4px"} overflow={"hidden"}>
            <Stack
                direction={"row"}
                width="100%"
                justifyContent={"space-between"}
                padding={"8px 20px 8px 24px"}
                bgcolor={"#3f464c"}
            >
                <Typography fontWeight={600}>{title}</Typography>

                <ExcelDownloadButton onClick={onExcelClick} />
            </Stack>

            <Stack bgcolor={"#4e5359"} padding={"20px"}>
                {children}
            </Stack>
        </Stack>
    );
};
