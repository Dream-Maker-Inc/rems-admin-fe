import { SearchRounded } from "@mui/icons-material";
import {
    Button,
    Stack,
    TableBody,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import {
    BasicTable,
    BasicTableContainer,
    BasicTd,
    BasicTdRow,
    BasicTh,
} from "../../tables/BasicTable";
import { LaptopPopupTemplate } from "../LaptopPopupTemplate";

export const SiteSearchPopup = () => {
    // popup open/close
    const [open, setOpen] = useState(true);
    const closePopup = () => setOpen(false);

    const handleSubmit = () => alert("submit");

    const [siteName, setSiteName] = useState("");
    const handleSiteNameChange = (v) => setSiteName(v);

    const handleSearch = () => alert("search");

    // tables
    const models = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        siteName: "편백경로당",
        address: "서울 노원구",
    }));

    const headers = [{ label: "사이트명" }, { label: "주소" }];

    return (
        <LaptopPopupTemplate
            open={open}
            onClose={closePopup}
            title={"사이트 검색"}
        >
            <Stack spacing={"8px"} padding={"24px"}>
                <Stack spacing={"24px"}>
                    <SearchBar
                        keyword={siteName}
                        handleKeywordChange={handleSiteNameChange}
                        handleSearch={handleSearch}
                    />

                    <LocalTable headers={headers} models={models} />
                </Stack>

                <ButtonSection onClick={handleSubmit} onClose={closePopup} />
            </Stack>
        </LaptopPopupTemplate>
    );
};

const SearchBar = ({ keyword, handleKeywordChange, handleSearch }) => (
    <Stack
        direction={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        padding={"16px 24px"}
        borderRadius={"4px"}
        bgcolor={"#394750"}
    >
        <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
            <Typography>사이트명</Typography>
            <TextField
                size="small"
                sx={{ bgcolor: "#3a444d" }}
                value={keyword}
                onChange={(e) => handleKeywordChange(e.target.value)}
            />
        </Stack>

        <Button
            variant="contained"
            startIcon={<SearchRounded />}
            onClick={handleSearch}
        >
            검색
        </Button>
    </Stack>
);

const LocalTable = ({ headers, models }) => {
    const [selectedRowId, setSelectedRowId] = useState(0);
    const handleSelectedRowId = (id) => setSelectedRowId(id);
    const isSelectedRow = (id) => id === selectedRowId;

    return (
        <BasicTableContainer sx={{ height: "300px" }}>
            <BasicTable>
                <TableHead>
                    <TableRow>
                        <BasicTh width={"20%"}>{headers[0].label}</BasicTh>
                        <BasicTh width={"80%"}>{headers[1].label}</BasicTh>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {models.map(({ id, ...rest }) => (
                        <BasicTdRow
                            key={id}
                            selected={isSelectedRow(id)}
                            onClick={() => handleSelectedRowId(id)}
                        >
                            <BasicTd width={"20%"}>{rest.siteName}</BasicTd>
                            <BasicTd width={"80%"}>{rest.address}</BasicTd>
                        </BasicTdRow>
                    ))}
                </TableBody>
            </BasicTable>
        </BasicTableContainer>
    );
};

const ButtonSection = ({ onClick, onClose }) => (
    <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        color={"#eeeeeecc"}
        pt={"8px"}
        spacing={"8px"}
    >
        <Button
            variant="contained"
            color={"primary"}
            size={"small"}
            onClick={onClick}
        >
            선택
        </Button>

        <Button
            variant="outlined"
            color={"inherit"}
            size={"small"}
            onClick={onClose}
        >
            닫기
        </Button>
    </Stack>
);
