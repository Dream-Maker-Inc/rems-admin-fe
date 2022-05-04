import { CircleOutlined } from "@mui/icons-material";
import {
    Button,
    Pagination,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { ExcelIcon } from "../../../common/icons";

export const SiteList = () => {
    const handleExcelDownload = () => alert("excel");

    const models = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        siteName: "편백경로당",
        operationType: "운영",
        createdAt: "2021-09-01",
        installedAt: "2021-09-01",
        openedAt: "2021-09-01",
        address: "서울시 노원구",
    }));

    const headers = [
        { label: "사이트명" },
        { label: "운영 여부" },
        { label: "등록일" },
        { label: "설치일" },
        { label: "개통일" },
        { label: "주소", width: "30%" },
    ];

    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    const totalItemCount = 150;
    const pageTotalCount = 10;
    const [pageNumber, setPageNumber] = useState(1);
    const handlePageNumberChange = (v) => setPageNumber(v);

    return (
        <Stack width={"100%"} spacing={"8px"}>
            <Header onExcelDownload={handleExcelDownload} />

            <Inner>
                <TableContainer sx={{ height: "400px" }}>
                    <CustomTable>
                        <TableHead>
                            <TableRow>
                                {headers.map((it) => (
                                    <TH key={it.label} width={it.width}>
                                        {it.label}
                                    </TH>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {models.map(({ id, ...rest }) => (
                                <TableDataRow
                                    key={id}
                                    selected={isSelectedRow(id)}
                                    onClick={() => handleSelectedRowId(id)}
                                >
                                    {Object.values(rest).map((it, index) => (
                                        <TD key={index}>{it}</TD>
                                    ))}
                                </TableDataRow>
                            ))}
                        </TableBody>
                    </CustomTable>
                </TableContainer>

                <TableFooter>
                    <Typography
                        variant="body2"
                        position={"absolute"}
                        left={0}
                        padding={"12px 36px"}
                    >{`전체 ${totalItemCount}건`}</Typography>
                    <Pagination
                        color="primary"
                        shape="rounded"
                        count={pageTotalCount}
                        page={pageNumber}
                        onChange={(_, page) => handlePageNumberChange(page)}
                        showFirstButton
                        showLastButton
                    />
                </TableFooter>
            </Inner>

            <Stack direction={"row"} spacing={"8px"} alignSelf={"flex-end"}>
                <Button variant="contained">신규</Button>

                <Stack color={"#aaa"}>
                    <Button variant="outlined" color="inherit">
                        수정
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

const Inner = ({ children }) => (
    <Stack component={Paper} sx={{ overflow: "hidden", bgcolor: "#303133" }}>
        {children}
    </Stack>
);

const CustomTable = ({ children }) => (
    <Table
        stickyHeader
        sx={{
            borderCollapse: "collapse",
            borderStyle: "hidden",
            "& .Mui-selected": { backgroundColor: "#43484c !important" },
        }}
    >
        {children}
    </Table>
);

const TH = ({ width = "140px", children }) => (
    <TableCell
        component={"th"}
        width={width}
        sx={{
            bgcolor: "#3f464c",
            border: "1px solid #555",
            textAlign: "center",
            whiteSpace: "nowrap",
        }}
    >
        <Typography>{children}</Typography>
    </TableCell>
);

const TableDataRow = ({ selected, onClick, children }) => (
    <TableRow
        hover
        sx={{ bgcolor: "#3a3f43" }}
        selected={selected}
        onClick={onClick}
    >
        {children}
    </TableRow>
);

const TD = ({ children }) => (
    <TableCell
        component={"td"}
        sx={{
            border: "1px solid #555",
            textAlign: "center",
            minWidth: "140px",
        }}
    >
        {children}
    </TableCell>
);

const TableFooter = ({ children }) => (
    <Stack
        direction={"row"}
        width={"100%"}
        padding={"12px 16px"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        borderTop={"1px solid #555"}
    >
        {children}
    </Stack>
);

const Header = ({ onExcelDownload }) => (
    <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} spacing={"8px"}>
            <CircleOutlined color="primary" sx={{ width: "16px" }} />
            <Typography variant="subtitle1">{"사이트 목록"}</Typography>
        </Stack>

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
