import { Stack, Typography } from "@mui/material";
import { SectionTemplate } from "../SectionTemplate";

export const GearList = () => {
    const models = getGearModels();

    const headers = [
        "장비 MAC",
        "장비명",
        "장비코드",
        "장비종류",
        "장비모델",
        "H/W버전",
        "F/W버전",
        "부모 MAC",
        "부모포트",
    ];

    const data = models.map((it) => Object.values(it));
    const isLastCell = (index) => index === headers.length - 1;

    return (
        <SectionTemplate title={"장비 목록"}>
            <Table>
                <THead>
                    <TR>
                        {headers.map((it, index) => (
                            <TH key={it} disableBR={isLastCell(index)}>
                                {it}
                            </TH>
                        ))}
                    </TR>
                </THead>

                <TBody>
                    {data.map((values, index) => (
                        <TR key={index}>
                            {values.map((it, index) => (
                                <TD key={index} disableBR={isLastCell(index)}>
                                    {it}
                                </TD>
                            ))}
                        </TR>
                    ))}
                </TBody>
            </Table>
        </SectionTemplate>
    );
};

const Table = ({ children }) => (
    <Stack component={"table"} overflow={"auto"}>
        {children}
    </Stack>
);
const THead = ({ children }) => (
    <Stack component={"thead"} width={"100%"}>
        {children}
    </Stack>
);
const TBody = ({ children }) => (
    <Stack component={"tbody"} width={"100%"}>
        {children}
    </Stack>
);
const TR = ({ children }) => (
    <Stack component={"tr"} direction={"row"}>
        {children}
    </Stack>
);

const TH = ({ disableBR, children }) => (
    <Stack
        component={"th"}
        sx={{
            bgcolor: "#3f464c",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "100px",
            width: "100%",
            padding: "8px",
            borderRight: !disableBR && "1px solid #eeeeee11",
            borderBottom: "1px solid #eeeeee11",
        }}
    >
        <Typography variant="subtitle1">{children}</Typography>
    </Stack>
);

const TD = ({ disableBR, children }) => (
    <Stack
        component={"td"}
        sx={{
            bgcolor: "#3a3f43",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minWidth: "100px",
            width: "100%",
            padding: "8px",
            borderRight: !disableBR && "1px solid #eeeeee11",
            borderBottom: "1px solid #eeeeee11",
            overflow: "hidden",
        }}
    >
        <Typography
            variant="body2"
            width={"100%"}
            sx={{ wordBreak: "break-word" }}
        >
            {children}
        </Typography>
    </Stack>
);

const getGearModels = () => [
    {
        gearMac: "00:00:00:00:00:01",
        gearName: "중계기1",
        gearCode: "RPR0001",
        gearType: "D_RDR",
        gearModel: "MODEL-A",
        HwVersion: "1.0",
        FwVersion: "1.0",
        parentMac: "00:00:00:00:00:01",
        parentPort: "-",
    },
    {
        gearMac: "00:00:00:00:00:02",
        gearName: "중계기1",
        gearCode: "RPR0001",
        gearType: "D_RDR",
        gearModel: "MODEL-A",
        HwVersion: "1.0",
        FwVersion: "1.0",
        parentMac: "00:00:00:00:00:01",
        parentPort: "1",
    },
    {
        gearMac: "00:00:00:00:00:03",
        gearName: "중계기1",
        gearCode: "GCR0001",
        gearType: "D_RDR",
        gearModel: "MODEL-A",
        HwVersion: "1.0",
        FwVersion: "1.0",
        parentMac: "00:00:00:00:00:01",
        parentPort: "2",
    },
    {
        gearMac: "00:00:00:00:00:04",
        gearName: "수집제어기1",
        gearCode: "GCR0001",
        gearType: "D_RDR",
        gearModel: "MODEL-A",
        HwVersion: "1.0",
        FwVersion: "1.0",
        parentMac: "00:00:00:00:00:03",
        parentPort: "1",
    },
    {
        gearMac: "00:00:00:00:00:05",
        gearName: "수집제어기1",
        gearCode: "GCR0001",
        gearType: "D_RDR",
        gearModel: "MODEL-A",
        HwVersion: "1.0",
        FwVersion: "1.0",
        parentMac: "00:00:00:00:00:01",
        parentPort: "2",
    },
    {
        gearMac: "00:00:00:00:00:06",
        gearName: "중계기1",
        gearCode: "RPR0001",
        gearType: "D_RDR",
        gearModel: "MODEL-A",
        HwVersion: "1.0",
        FwVersion: "1.0",
        parentMac: "00:00:00:00:00:01",
        parentPort: "1",
    },
];
