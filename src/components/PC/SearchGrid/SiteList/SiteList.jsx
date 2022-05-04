import { CircleOutlined } from "@mui/icons-material";
import {
    Button,
    Pagination,
    Paper,
    Stack,
    TableBody,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { ExcelIcon } from "../../../common/icons";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../common/tables/BasicTable";

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
                <BasicTableContainer sx={{ height: "400px" }}>
                    <BasicTable>
                        <TableHead>
                            <TableRow>
                                {headers.map((it) => (
                                    <BasicTh key={it.label} width={it.width}>
                                        {it.label}
                                    </BasicTh>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {models.map(({ id, ...rest }) => (
                                <BasicTdRow
                                    key={id}
                                    selected={isSelectedRow(id)}
                                    onClick={() => handleSelectedRowId(id)}
                                >
                                    {Object.values(rest).map((it, index) => (
                                        <BasicTd key={index}>{it}</BasicTd>
                                    ))}
                                </BasicTdRow>
                            ))}
                        </TableBody>
                    </BasicTable>
                </BasicTableContainer>

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
