import styled from "@emotion/styled";
import { FilterAltRounded } from "@mui/icons-material";
import {
    Checkbox,
    FormControlLabel,
    IconButton,
    MenuItem,
    Select,
    Stack,
} from "@mui/material";
import { useState } from "react";

// 구분/선택 - 데이터 셀
export const GroupSelectArea = () => {
    const groups = ["group1", "group2", "group3"];
    const [group, setGroup] = useState(groups[0]);
    const handleGroupChange = (v) => setGroup(v);

    const siteNames = ["site1", "site2", "site3"];
    const [siteName, setSiteName] = useState(siteNames[0]);
    const handleSiteNameChange = (v) => setSiteName(v);

    const handleFilterClick = () => alert("filter");

    const checkBoxItems = [
        {
            label: "편백 경로당1",
            checked: true,
        },
        {
            label: "편백 경로당2",
            checked: true,
        },
        {
            label: "편백 경로당3",
            checked: true,
        },
        {
            label: "서대문구 경로당1",
            checked: false,
        },
        {
            label: "서대문구 경로당2",
            checked: false,
        },
        {
            label: "서대문구 경로당3",
            checked: false,
        },
        {
            label: "춘천 경로당1",
            checked: false,
        },
        {
            label: "춘천 경로당2",
            checked: false,
        },
    ];

    const hnadleCheckBoxChange = (index, checked) =>
        alert(`index: ${index}, checked: ${checked}`);

    return (
        <Stack spacing={"8px"}>
            <Header>
                <CustomSelect
                    value={group}
                    onChange={(e) => handleGroupChange(e.target.value)}
                >
                    {groups.map((it, index) => (
                        <MenuItem key={index} value={it}>
                            {it}
                        </MenuItem>
                    ))}
                </CustomSelect>

                <CustomSelect
                    value={siteName}
                    onChange={(e) => handleSiteNameChange(e.target.value)}
                >
                    {siteNames.map((it, index) => (
                        <MenuItem key={index} value={it}>
                            {it}
                        </MenuItem>
                    ))}
                </CustomSelect>

                <Stack>
                    <FilterIcon onClick={handleFilterClick} />
                </Stack>
            </Header>

            <GridContainer>
                {checkBoxItems.map((it, index) => (
                    <FormControlLabel
                        key={it.label}
                        control={<Checkbox />}
                        label={it.label}
                        checked={it.checked}
                        onChange={(_, checked) =>
                            hnadleCheckBoxChange(index, checked)
                        }
                    />
                ))}
            </GridContainer>
        </Stack>
    );
};

const Header = ({ children }) => (
    <Stack direction={"row"} spacing={"8px"} alignItems={"center"}>
        {children}
    </Stack>
);

const CustomSelect = ({ value, onChange, children }) => (
    <Select
        size={"small"}
        sx={{ width: "250px" }}
        value={value}
        onChange={onChange}
    >
        {children}
    </Select>
);

const FilterIcon = ({ onClick }) => (
    <IconButton
        size={"small"}
        color={"primary"}
        sx={{
            borderRadius: "4px",
            bgcolor: "primary.main",
            border: "1px solid #eee",
            borderColor: "primary.main",
        }}
        onClick={onClick}
    >
        <FilterAltRounded htmlColor="#fff" />
    </IconButton>
);

const GridContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 260px);
`;
