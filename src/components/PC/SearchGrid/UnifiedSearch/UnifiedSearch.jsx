import styled from "@emotion/styled";
import { SearchRounded } from "@mui/icons-material";
import {
    Button,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

export const UnifiedSearch = () => {
    const [siteName, setSiteName] = useState("");
    const handleSiteNameChange = (v) => setSiteName(v);

    const [startedDate, setStartedDate] = useState("");
    const handleStartedDateChange = (v) => setStartedDate(v);

    const [closedDate, setClosedDate] = useState("");
    const handleClosedDateChange = (v) => setClosedDate(v);

    const states = ["상태1", "상태2", "상태3"];
    const [state, setState] = useState(states[0]);
    const handleStateChange = (v) => setState(v);

    const gears = ["설비1", "설비2", "설비3"];
    const [gear, setGear] = useState(gears[0]);
    const handleGearChange = (v) => setGear(v);

    return (
        <Root>
            <Stack direction={"row"} spacing={"24px"}>
                <ItemRow>
                    <Typography width={"100px"} textAlign={"end"}>
                        사이트명
                    </Typography>
                    <TextField
                        size="small"
                        value={siteName}
                        onChange={(e) => handleSiteNameChange(e.target.value)}
                    />
                </ItemRow>

                <ItemRow>
                    <Typography>날짜</Typography>
                    <DateTextField
                        size={"small"}
                        type={"date"}
                        value={startedDate}
                        onChange={(e) =>
                            handleStartedDateChange(e.target.value)
                        }
                    />
                    <Typography>~</Typography>
                    <DateTextField
                        size={"small"}
                        type={"date"}
                        value={closedDate}
                        onChange={(e) => handleClosedDateChange(e.target.value)}
                    />
                </ItemRow>

                <ItemRow>
                    <Typography>상태</Typography>
                    <CustomSelector
                        items={states}
                        value={state}
                        onChange={(e) => handleStateChange(e.target.value)}
                    />
                </ItemRow>

                <ItemRow>
                    <Typography>설비</Typography>
                    <CustomSelector
                        items={gears}
                        value={gear}
                        onChange={(e) => handleGearChange(e.target.value)}
                    />
                </ItemRow>
            </Stack>

            <Stack>
                <Button variant="contained" startIcon={<SearchRounded />}>
                    검색
                </Button>
            </Stack>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        direction={"row"}
        width={"100%"}
        padding={"16px"}
        color={"#fff"}
        bgcolor={"#394750"}
        whiteSpace={"nowrap"}
        justifyContent={"space-between"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);

const ItemRow = ({ children }) => (
    <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
        {children}
    </Stack>
);

const DateTextField = styled(TextField)`
    color-scheme: dark;
`;

const CustomSelector = ({ value, onChange, items }) => (
    <Select
        fullWidth
        size="small"
        sx={{ bgcolor: "#3a444d" }}
        value={value}
        onChange={onChange}
    >
        {items.map((it) => (
            <MenuItem key={it} value={it}>
                {it}
            </MenuItem>
        ))}
    </Select>
);
