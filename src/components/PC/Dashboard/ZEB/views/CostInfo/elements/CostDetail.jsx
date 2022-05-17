import { TableBody, TableHead, TableRow } from "@mui/material";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../../../../common/tables/BasicTable";
import { useSelectedRow } from "../../../../../../common/tables/BasicTable/useSelectedRow";
import { CostBoxTemplate } from "./CostBox.template";

export const CostDetail = () => {
    const models = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        yearMonth: "2021-09-31",
        amount: "10",
    }));

    const headers = [{ label: "일자" }, { label: "전력량(kWh)" }];

    const { isSelectedRow, handleSelectedRowId } = useSelectedRow();
    const handleExcelDownload = () => alert("excel");

    return (
        <CostBoxTemplate title={"비용 상세"} onExcelClick={handleExcelDownload}>
            <BasicTableContainer sx={{ height: "300px" }}>
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
        </CostBoxTemplate>
    );
};
