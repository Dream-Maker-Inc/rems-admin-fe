import styled from "@emotion/styled";
import {
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { SectionTemplate } from "../common/SectionTemplate";

export const MeasureSetting = () => {
    const sepcs = [
        "- 측정 채널수 : 18채널 / 적용전압 : 최대 690VAC (선간전압) / 적용 규격 : IEC-62053-21/22 / 전류 측정 범위: 50~600A/CH 최대 3,000A/CH / 전압 주파수 : 45~65Hz",
        "- 시리얼포트 : RS485, RS232",
    ];

    // 교정일
    const [calibrationDate, setCalibrationDate] = useState("");
    const handleCalibrationDateChange = (v) => setCalibrationDate(v);

    // 교체일
    const [changedDate, setChangedDate] = useState("");
    const handleChangedDateChange = (v) => setChangedDate(v);

    const handleAddItem = () => alert("add item");

    return (
        <SectionTemplate title={"[계측기명] 설정"}>
            <TableContainer component={Paper}>
                <CustomTable>
                    <TableBody>
                        <TableRow>
                            <TH>최신검교정일</TH>
                            <TD padding={"8px"}>
                                <DateTextField
                                    fullWidth
                                    size={"small"}
                                    type={"date"}
                                    value={calibrationDate}
                                    onChange={(e) =>
                                        handleCalibrationDateChange(
                                            e.target.value
                                        )
                                    }
                                />
                            </TD>

                            <TH>교체일</TH>
                            <TD padding={"8px"}>
                                <DateTextField
                                    fullWidth
                                    size={"small"}
                                    type={"date"}
                                    value={changedDate}
                                    onChange={(e) =>
                                        handleChangedDateChange(e.target.value)
                                    }
                                />
                            </TD>
                        </TableRow>

                        <TableRow>
                            <TH colSpan={1}>상세 스펙</TH>
                            <TD colSpan={3}>
                                <Stack spacing={"8px"}>
                                    {sepcs.map((it, index) => (
                                        <Typography key={index}>
                                            {it}
                                        </Typography>
                                    ))}
                                </Stack>
                            </TD>
                        </TableRow>
                    </TableBody>
                </CustomTable>
            </TableContainer>

            <Stack alignItems={"flex-end"}>
                <Button variant="contained" onClick={handleAddItem}>
                    추가
                </Button>
            </Stack>
        </SectionTemplate>
    );
};

const CustomTable = ({ children }) => (
    <Table
        sx={{
            borderCollapse: "collapse",
            borderStyle: "hidden",
        }}
    >
        {children}
    </Table>
);

const TH = ({ colSpan, children }) => (
    <TableCell
        component={"th"}
        colSpan={colSpan}
        width={"140px"}
        sx={{ bgcolor: "#3f464c", border: "1px solid #eeeeee11" }}
    >
        <Typography textAlign={"end"}>{children}</Typography>
    </TableCell>
);

const TD = ({ colSpan, padding, children }) => (
    <TableCell
        component={"td"}
        colSpan={colSpan}
        sx={{
            bgcolor: "#3a3f43",
            border: "1px solid #eeeeee11",
            padding,
        }}
    >
        {children}
    </TableCell>
);

const DateTextField = styled(TextField)`
    color-scheme: dark;
`;
