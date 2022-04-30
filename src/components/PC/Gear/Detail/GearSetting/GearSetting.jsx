import {
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { SectionTemplate } from "../SectionTemplate";

export const GearSetting = () => {
    const models = [
        {
            id: 1,
            gearCode: "WMR0001",
            gearName: "메인전력",
            gearType: "F_WMR",
            gearClass: "관제설비",
            gearModel: "MODEL-A",
            floor: "1층",
            location: "분전반1",
            gearGroup: "",
            parent: "수집제 어기1",
            parentPort: "1",
        },
        {
            id: 2,
            gearCode: "WMR0002",
            gearName: "메인전력",
            gearType: "F_WMR",
            gearClass: "관제설비",
            gearModel: "MODEL-A",
            floor: "1층",
            location: "분전반2",
            gearGroup: "",
            parent: "수집제 어기1",
            parentPort: "1",
        },
    ];

    const headers = [
        "설비코드",
        "설비명",
        "설비종류",
        "설비구분",
        "설비모델",
        "층",
        "위치",
        "설비 그룹",
        "부모",
        "부모포트",
    ];

    const gearCodes = ["WMR0001", "WMR0002", "WMR0003"];
    const handleGearCodeChange = (v) => alert(v);

    const handleGearNameChange = (v) => alert(v);

    const floors = ["1층", "2층", "3층"];
    const handleFloorChange = (v) => alert(v);

    const locations = ["분전반1", "분전반2", "분전반3"];
    const handleLocationChange = (v) => alert(v);

    const handleGearGroupChange = (v) => alert(v);

    const parents = ["수집제 어기1", "수집제 어기2", "수집제 어기3"];
    const handleParentChange = (v) => alert(v);

    const parentPorts = ["1", "2", "3"];
    const handleParentPortChange = (v) => alert(v);

    const handleSave = () => alert("save");
    const handleCancel = () => alert("cancel");
    const handleClose = () => alert("close");

    return (
        <SectionTemplate title={"설비 설정"}>
            <TableContainer component={Paper}>
                <CustomTable>
                    <TableHead>
                        <TableRow>
                            {headers.map((it) => (
                                <TH key={it}>{it}</TH>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {models.map((it) => (
                            <TableRow key={it.id}>
                                <TD>
                                    <Select
                                        size={"small"}
                                        value={it.gearCode}
                                        onChange={(e) =>
                                            handleGearCodeChange(e.target.value)
                                        }
                                    >
                                        {gearCodes.map((it, index) => (
                                            <MenuItem key={index} value={it}>
                                                {it}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TD>

                                <TD>
                                    <TextField
                                        size={"small"}
                                        value={it.gearName}
                                        onChange={(e) =>
                                            handleGearNameChange(e.target.value)
                                        }
                                    />
                                </TD>

                                <TD>{it.gearType}</TD>
                                <TD>{it.gearClass}</TD>
                                <TD>{it.gearModel}</TD>

                                <TD>
                                    <Select
                                        size={"small"}
                                        value={it.floor}
                                        onChange={(e) =>
                                            handleFloorChange(e.target.value)
                                        }
                                    >
                                        {floors.map((it, index) => (
                                            <MenuItem key={index} value={it}>
                                                {it}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TD>

                                <TD>
                                    <Select
                                        size={"small"}
                                        value={it.location}
                                        onChange={(e) =>
                                            handleLocationChange(e.target.value)
                                        }
                                    >
                                        {locations.map((it, index) => (
                                            <MenuItem key={index} value={it}>
                                                {it}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TD>

                                <TD>
                                    <TextField
                                        size={"small"}
                                        value={it.gearGroup}
                                        onChange={(e) =>
                                            handleGearGroupChange(
                                                e.target.value
                                            )
                                        }
                                    />
                                </TD>

                                <TD>
                                    <Select
                                        size={"small"}
                                        value={it.parent}
                                        onChange={(e) =>
                                            handleParentChange(e.target.value)
                                        }
                                    >
                                        {parents.map((it, index) => (
                                            <MenuItem key={index} value={it}>
                                                {it}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TD>

                                <TD>
                                    <Select
                                        size={"small"}
                                        value={it.parentPort}
                                        onChange={(e) =>
                                            handleParentPortChange(
                                                e.target.value
                                            )
                                        }
                                    >
                                        {parentPorts.map((it, index) => (
                                            <MenuItem key={index} value={it}>
                                                {it}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TD>
                            </TableRow>
                        ))}
                    </TableBody>
                </CustomTable>
            </TableContainer>

            <Stack alignItems={"flex-end"}>
                <ActionButtons
                    onSave={handleSave}
                    onCancel={handleCancel}
                    onClose={handleClose}
                />
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
        sx={{
            bgcolor: "#3f464c",
            border: "1px solid #eeeeee11",
            textAlign: "center",
            whiteSpace: "nowrap",
        }}
    >
        <Typography>{children}</Typography>
    </TableCell>
);

const TD = ({ colSpan, children }) => (
    <TableCell
        component={"td"}
        colSpan={colSpan}
        sx={{
            bgcolor: "#3a3f43",
            border: "1px solid #eeeeee11",
            textAlign: "center",
            minWidth: "140px",
        }}
    >
        {children}
    </TableCell>
);
