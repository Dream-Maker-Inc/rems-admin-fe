import {
    FormControlLabel,
    Paper,
    Radio,
    RadioGroup,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { SectionTemplate } from "../common/SectionTemplate";
import { GroupSelectArea } from "./Elements/GroupSelectArea";

export const SiteSetting = () => {
    const [isZEB, setIsZEB] = useState(true);
    const handleZEBChange = (isZEB) => setIsZEB(isZEB);

    return (
        <SectionTemplate title={"사이트 할당"}>
            <TableContainer component={Paper}>
                <CustomTable>
                    <TableBody>
                        <TableRow>
                            <TH>구분/선택</TH>
                            <TD>
                                <GroupSelectArea />
                            </TD>
                        </TableRow>
                        <TableRow>
                            <TH>내용</TH>
                            <TD>
                                <Stack spacing={"2px"}>
                                    <Typography variant="subtitle1">
                                        비밀번호 관리 유의
                                    </Typography>
                                    <Typography>
                                        - 안전한 비밀번호 사용
                                    </Typography>
                                    <Typography>
                                        - 주기적인 비밀번호 변경
                                    </Typography>
                                </Stack>
                            </TD>
                        </TableRow>
                        <TableRow>
                            <TH>ZEB 여부</TH>
                            <TD>
                                <RadioGroup
                                    row
                                    value={isZEB}
                                    onChange={(e) =>
                                        handleZEBChange(e.target.value)
                                    }
                                >
                                    <FormControlLabel
                                        value={true}
                                        control={<Radio />}
                                        label="해당"
                                    />
                                    <FormControlLabel
                                        value={false}
                                        control={<Radio />}
                                        label="미해당"
                                    />
                                </RadioGroup>
                            </TD>
                        </TableRow>
                    </TableBody>
                </CustomTable>
            </TableContainer>
        </SectionTemplate>
    );
};

// table
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
        <Typography textAlign={"end"} whiteSpace={"nowrap"}>
            {children}
        </Typography>
    </TableCell>
);

const TD = ({ colSpan, children }) => (
    <TableCell
        component={"td"}
        colSpan={colSpan}
        sx={{
            bgcolor: "#3a3f43",
            border: "1px solid #eeeeee11",
        }}
    >
        {children}
    </TableCell>
);
