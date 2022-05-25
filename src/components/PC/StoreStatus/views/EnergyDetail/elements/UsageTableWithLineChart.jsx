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
import { ItemCardTemplate } from "../../../common/ItemCardTemplate";

export const UsageTableWithLineChart = ({
    headers,
    models,
    tableTitle,
    chartTitle,
}) => {
    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    return (
        <Stack direction={"row"} width={"100%"} spacing={"24px"}>
            <Stack width={"40%"}>
                <ItemCardTemplate title={tableTitle}>
                    <Stack bgcolor={"#4e5359"} height={"100%"} padding={"24px"}>
                        <BasicTableContainer sx={{ height: "252px" }}>
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
                                            onClick={() =>
                                                handleSelectedRowId(id)
                                            }
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
                </ItemCardTemplate>
            </Stack>

            <ItemCardTemplate title={chartTitle}>
                <LineChartWithLegend legendWidth={0} />
            </ItemCardTemplate>
        </Stack>
    );
};
