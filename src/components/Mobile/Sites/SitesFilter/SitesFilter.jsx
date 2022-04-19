import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SearchBar } from "../../common/SearchBar";

export const SitesFilter = () => {
    // group
    const groupFilterItems = ["그룹1", "그룹2", "그룹3"];
    const [groupFilter, setGroupFilter] = useState(groupFilterItems[0]);
    const handleGroupFilterChange = (v) => setGroupFilter(v);

    // site
    const [keyword, setKeyword] = useState("");
    const handleKeywordChange = (v) => setKeyword(v);
    const handleSubmit = () => alert("ok");

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
                    placeholder={"사이트명"}
                    onSubmit={handleSubmit}
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
