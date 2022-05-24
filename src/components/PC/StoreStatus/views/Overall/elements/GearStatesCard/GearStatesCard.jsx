import { Stack, TableBody, TableHead, TableRow } from "@mui/material";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../../../../../common/tables/BasicTable";
import { ItemCardTemplate } from "../../../../common/ItemCardTemplate";

export const GearStatesCard = () => {
    const models = [
        {
            key: { label: "거실", rowSpan: 3 },
            data: [
                [
                    { label: "온도센서" },
                    { label: "거실온도" },
                    { label: "28.4" },
                ],
                [
                    { label: "냉난방기" },
                    { label: "거실 냉난방기" },
                    { label: "꺼짐" },
                ],
                [
                    { label: "화재감지기" },
                    { label: "거실 화재감지기" },
                    { label: "정상" },
                ],
            ],
        },
        {
            key: { label: "방1", rowSpan: 2 },
            data: [
                [
                    { label: "온도센서" },
                    { label: "거실온도" },
                    { label: "28.4" },
                ],
                [
                    { label: "냉난방기" },
                    { label: "거실 냉난방기" },
                    { label: "꺼짐" },
                ],
            ],
        },
        {
            key: { label: "방2" },
            data: [
                [
                    { label: "온도센서" },
                    { label: "거실온도" },
                    { label: "28.4" },
                ],
            ],
        },
        {
            key: { label: "방3" },
            data: [
                [
                    { label: "온도센서" },
                    { label: "거실온도" },
                    { label: "28.4" },
                ],
            ],
        },
    ];

    const headers = [
        { label: "설비 그룹" },
        { label: "설비 종류" },
        { label: "설비명" },
        { label: "상태" },
    ];

    return (
        <ItemCardTemplate title={"설비 현황"} height={"100%"}>
            <Stack
                width={"100%"}
                height={"100%"}
                spacing={"8px"}
                padding={"20px"}
            >
                <BasicTableContainer sx={{ height: "100%" }}>
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
                            {models.map(({ key, data }) =>
                                data.map((columns, index) => (
                                    <BasicTdRow key={index}>
                                        {index === 0 && (
                                            <BasicTd
                                                rowSpan={key.rowSpan}
                                                bgFixed={!!key.rowSpan}
                                            >
                                                {key.label}
                                            </BasicTd>
                                        )}

                                        {columns.map(({ label }) => (
                                            <BasicTd key={label}>
                                                {label}
                                            </BasicTd>
                                        ))}
                                    </BasicTdRow>
                                ))
                            )}
                        </TableBody>
                    </BasicTable>
                </BasicTableContainer>
            </Stack>
        </ItemCardTemplate>
    );
};
