import { Button, Stack, Tooltip } from "@mui/material";
import { ExcelIcon } from "../../icons/Excel.icon";
import { LabelWithCircle } from "../../LabelWithCircle";

export const ChartHeaderWithExcelButton = ({ title, onExcelDownload }) => {
    return (
        <Stack direction="row" width="100%" justifyContent={"space-between"}>
            <LabelWithCircle title={title} />

            <Tooltip title={"엑셀 파일로 다운로드"}>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<ExcelIcon />}
                    onClick={onExcelDownload}
                >
                    다운로드
                </Button>
            </Tooltip>
        </Stack>
    );
};
