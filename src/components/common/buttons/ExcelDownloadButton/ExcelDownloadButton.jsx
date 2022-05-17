import { Button, Tooltip } from "@mui/material";
import { ExcelIcon } from "../../icons";

export const ExcelDownloadButton = ({
    onClick,
    label = "다운로드",
    tooltip = "엑셀 파일로 다운로드",
}) => {
    return (
        <Tooltip title={tooltip}>
            <Button
                variant="contained"
                size="small"
                startIcon={<ExcelIcon />}
                onClick={onClick}
            >
                {label}
            </Button>
        </Tooltip>
    );
};
