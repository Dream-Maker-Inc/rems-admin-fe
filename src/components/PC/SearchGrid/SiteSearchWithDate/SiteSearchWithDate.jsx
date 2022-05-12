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
import { SiteSearchRow } from "../SiteSearch/SiteSearchRow";

export const SiteSearchWithDate = () => {
    const ranges = ["연간", "월간"];
    const [range, setRange] = useState(ranges[0]);
    const handleRangeChange = (v) => setRange(v);

    const years = ["2022년", "2021년", "2020년"];
    const [year, setYear] = useState(years[0]);
    const handleYearChange = (v) => setYear(v);

    const months = ["9월", "8월", "7월"];
    const [month, setMonth] = useState(months[0]);
    const handleMonthChange = (v) => setMonth(v);

    const dates = ["3일", "2일", "1일"];
    const [date, setDate] = useState(dates[0]);
    const handleDateChange = (v) => setDate(v);

    const [startedDate, setStartedDate] = useState("");
    const handleStartedDateChange = (v) => setStartedDate(v);

    const [closedDate, setClosedDate] = useState("");
    const handleClosedDateChange = (v) => setClosedDate(v);

    const displayIntervals = ["표시간격"];
    const [displayInterval, setDisplayInterval] = useState(displayIntervals[0]);
    const handleDisplayIntervalChange = (v) => setDisplayInterval(v);

    const handleSearch = () => alert("search");

    return (
        <Root>
            <Left>
                <SiteSearchRow />
                <DateSection>
                    <Typography
                        minWidth={"100px"}
                        textAlign={"end"}
                        alignSelf={"flex-start"}
                        py={"8px"}
                    >
                        날짜
                    </Typography>

                    <Stack width={"100%"} spacing={"12px"}>
                        <DateSectionRow>
                            <CustomSelector
                                items={ranges}
                                value={range}
                                onChange={(e) =>
                                    handleRangeChange(e.target.value)
                                }
                            />

                            <Typography sx={{ visibility: "hidden" }}>
                                ~
                            </Typography>

                            <CustomSelector
                                items={years}
                                value={year}
                                onChange={(e) =>
                                    handleYearChange(e.target.value)
                                }
                            />
                            <CustomSelector
                                items={months}
                                value={month}
                                onChange={(e) =>
                                    handleMonthChange(e.target.value)
                                }
                            />
                            <CustomSelector
                                items={dates}
                                value={date}
                                onChange={(e) =>
                                    handleDateChange(e.target.value)
                                }
                            />
                        </DateSectionRow>

                        <DateSectionRow>
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
                                onChange={(e) =>
                                    handleClosedDateChange(e.target.value)
                                }
                            />
                            <CustomSelector
                                items={displayIntervals}
                                value={displayInterval}
                                onChange={(e) =>
                                    handleDisplayIntervalChange(e.target.value)
                                }
                            />
                        </DateSectionRow>
                    </Stack>
                </DateSection>
            </Left>

            <Button
                variant="contained"
                startIcon={<SearchRounded />}
                onClick={handleSearch}
            >
                검색
            </Button>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        width={"100%"}
        bgcolor={"#374750"}
        padding={"16px 24px"}
        color={"#fff"}
        whiteSpace={"nowrap"}
        borderRadius={"4px"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);

const Left = ({ children }) => <Stack spacing={"24px"}>{children}</Stack>;
const DateSection = ({ children }) => (
    <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
        {children}
    </Stack>
);
const DateSectionRow = ({ children }) => (
    <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
        {children}
    </Stack>
);

const DateTextField = styled(TextField)`
    color-scheme: dark;
    background-color: #3a444d;
    width: 160px;
`;

const CustomSelector = ({ value, onChange, items }) => (
    <Select
        size="small"
        sx={{ bgcolor: "#3a444d", width: "160px" }}
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
