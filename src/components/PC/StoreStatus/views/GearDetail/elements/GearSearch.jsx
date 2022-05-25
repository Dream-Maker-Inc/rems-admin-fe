import styled from "@emotion/styled";
import { SearchRounded } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const GearSearch = () => {
    const [date, setDate] = useState("2021-09-01");
    const handleDateChange = (v) => setDate(v);

    const handleSearch = () => alert("search");

    return (
        <Root>
            <Stack direction={"row"} spacing={"24px"}>
                <ItemRow>
                    <Typography width={"100px"} textAlign={"end"}>
                        날짜
                    </Typography>
                    <DateTextField
                        size="small"
                        type={"date"}
                        value={date}
                        onChange={(e) => handleDateChange(e.target.value)}
                    />
                </ItemRow>
            </Stack>

            <Stack>
                <Button
                    variant="contained"
                    onClick={handleSearch}
                    sx={{
                        minWidth: 0,
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <SearchRounded />
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
        borderRadius={"4px"}
        whiteSpace={"nowrap"}
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
    background-color: #3a444d;
`;
