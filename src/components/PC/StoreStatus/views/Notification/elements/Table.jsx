import {
    Pagination,
    Paper,
    Stack,
    TableBody,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useState } from "react";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../../../common/tables/BasicTable";

export const Table = () => {
    const models = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        gearName: "편백경로당",
        gearGroup: "운영",
        error: "2021-09-01",
        state: "2021-09-01",
        openedAt: "2021-09-01 00:00:00",
        confirmedAt: "2021-09-01 00:00:00",
        solvedAt: "2021-09-01 00:00:00",
    }));

    const headers = [
        { label: "설비명" },
        { label: "설비 그룹" },
        { label: "장애 내용" },
        { label: "상태" },
        { label: "발생일시" },
        { label: "확인일시" },
        { label: "처리일시" },
    ];

    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    const totalItemCount = 150;
    const pageTotalCount = 10;
    const [pageNumber, setPageNumber] = useState(1);
    const handlePageNumberChange = (v) => setPageNumber(v);

    return (
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
