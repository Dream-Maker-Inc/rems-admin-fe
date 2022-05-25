import { Stack, TableBody, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { LineChartWithLegend } from "../../../../../common/charts/LineChartWithLegend";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../../../common/tables/BasicTable";

export const TableWithLineChart = () => {
    const models = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        date: "2021-09-25 17:34:00",
        state: "꺼짐",
    }));

    const headers = [{ label: "일자" }, { label: "상태" }];

    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    return (
        <Stack
            direction={"row"}
            width={"100%"}
            spacing={"24px"}
            alignItems={"center"}
        >
            <Stack width={"40%"}>
                <Stack bgcolor={"#4e5359"} height={"100%"}>
                    <BasicTableContainer sx={{ height: "260px" }}>
                        <BasicTable>
                            <TableHead>
                                <TableRow>
                                    {headers.map((it) => (
                                        <BasicTh
                                            key={it.label}
                                            width={it.width}
                                        >
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
                                        {Object.values(rest).map(
                                            (it, index) => (
                                                <BasicTd key={index}>
                                                    {it}
                                                </BasicTd>
                                            )
                                        )}
                                    </BasicTdRow>
                                ))}
                            </TableBody>
                        </BasicTable>
                    </BasicTableContainer>
                </Stack>
            </Stack>

            <LineChartWithLegend legendWidth={0} />
        </Stack>
    );
};
