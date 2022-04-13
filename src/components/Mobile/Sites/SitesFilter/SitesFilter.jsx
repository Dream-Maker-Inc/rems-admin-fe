import { SearchRounded } from "@mui/icons-material";
import {
    IconButton,
    InputAdornment,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

export const SitesFilter = () => {
    // group
    const groupFilterItems = ["그룹1", "그룹2", "그룹3"];
    const [groupFilter, setGroupFilter] = useState(groupFilterItems[0]);
    const handleGroupFilterChange = (v) => setGroupFilter(v);

    // site
    const [keyword, setKeyword] = useState("");
    const handleKeywordChange = (v) => setKeyword(v);

    return (
        <Root>
            <FilterContainer>
                <FilterTitle>그룹</FilterTitle>

                <CustomSelector
                    value={groupFilter}
                    onChange={(e) => handleGroupFilterChange(e.target.value)}
                    items={groupFilterItems}
                />
            </FilterContainer>

            <FilterContainer>
                <FilterTitle>사이트명</FilterTitle>

                <SearchBar
                    value={keyword}
                    onChange={(e) => handleKeywordChange(e.target.value)}
                />
            </FilterContainer>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack width={"100%"} bgcolor={"#5e838a"} p={"16px"} spacing={"16px"}>
        {children}
    </Stack>
);

const FilterContainer = ({ children }) => (
    <Stack direction={"row"} spacing={"8px"} alignItems={"center"}>
        {children}
    </Stack>
);

const FilterTitle = ({ children }) => (
    <Typography
        display={"flex"}
        justifyContent={"flex-end"}
        minWidth={"64px"}
        color={"#fff"}
    >
        {children}
    </Typography>
);

const CustomSelector = ({ value, onChange, items }) => (
    <Select
        fullWidth
        size="small"
        sx={{ bgcolor: "#fff" }}
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

const SearchBar = ({ value, onChange }) => (
    <TextField
        fullWidth
        variant={"outlined"}
        size={"small"}
        placeholder={"사이트명"}
        InputProps={{
            sx: {
                bgcolor: "#fff",
                paddingRight: 0,
            },
            endAdornment: (
                <InputAdornment position={"end"}>
                    <IconButton onClick={() => {}}>
                        <SearchRounded />
                    </IconButton>
                </InputAdornment>
            ),
        }}
        value={value}
        onChange={onChange}
    />
);
