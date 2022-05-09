import { Stack, TableBody, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../../common/tables/BasicTable";
import { CustomSelector } from "../../../../common/CustomSelector";

export const DataGrid = () => {
    const models = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        siteName: "편백경로당",
        gearName: "거실 화재 감지기",
        content: "화재 발생",
        state: "처리",
        createdAt: "2021-09-01 00:00:00",
        confirmedAt: "2021-09-01 00:00:24",
        solvedAt: "2021-09-01 00:03:44",
    }));

    const headers = [
        { label: "사이트명" },
        { label: "설비명" },
        { label: "장애내용" },
        { label: "상태" },
        { label: "발생일시" },
        { label: "확인일시" },
        { label: "처리일시" },
    ];

    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    // filter
    const filters = ["상태1", "상태2", "상태3"];
    const [filterValue, setFilterValue] = useState(filters[0]);
    const handleFilterChange = (v) => setFilterValue(v);

    return (
        <Stack width={"100%"} spacing={"8px"}>
            <Stack alignItems={"flex-end"}>
                <CustomSelector
                    items={filters}
                    value={filterValue}
                    onChange={(e) => handleFilterChange(e.target.value)}
                />
            </Stack>

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
        </Stack>
    );
};
