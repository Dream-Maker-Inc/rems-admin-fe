import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { SectionTemplate } from "../SectionTemplate";

export const SiteInfo = () => {
    const model = {
        siteName: "편백경로당",
        gwID: "1",
        gwMac: "1",
        openTime: "09:00",
        closeTime: "18:00",
    };
    const { siteName, gwID, gwMac } = model;

    const [openTime, setOpenTime] = useState(model.openTime);
    const handleOpenTimeChange = (v) => setOpenTime(v);

    const [closeTime, setCloseTime] = useState(model.closeTime);
    const handleCloseTimeChange = (v) => setCloseTime(v);

    return (
        <SectionTemplate title={"사이트 정보"}>
            <TableContainer component={Paper}>
                <CustomTable>
                    <TableBody>
                        <TableRow>
                            <TH colSpan={1}>사이트명</TH>
                            <TD colSpan={3}>{siteName}</TD>
                        </TableRow>

                        <TableRow>
                            <TH>GW ID</TH>
                            <TD>{gwID}</TD>

                            <TH>GW MAC</TH>
                            <TD>{gwMac}</TD>
                        </TableRow>

                        <TableRow>
                            <TH>운영 시작 시간</TH>
                            <TD>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={openTime}
                                    onChange={(e) =>
                                        handleOpenTimeChange(e.target.value)
                                    }
                                />
                            </TD>

                            <TH>운영 종료 시간</TH>
                            <TD>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={closeTime}
                                    onChange={(e) =>
                                        handleCloseTimeChange(e.target.value)
                                    }
                                />
                            </TD>
                        </TableRow>
                    </TableBody>
                </CustomTable>
            </TableContainer>
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
        sx={{ bgcolor: "#3f464c", border: "1px solid #eeeeee33" }}
    >
        <Typography textAlign={"end"}>{children}</Typography>
    </TableCell>
);

const TD = ({ colSpan, children }) => (
    <TableCell
        component={"td"}
        colSpan={colSpan}
        sx={{
            bgcolor: "#3a3f43",
            border: "1px solid #eeeeee33",
        }}
    >
        <Typography>{children}</Typography>
    </TableCell>
);
