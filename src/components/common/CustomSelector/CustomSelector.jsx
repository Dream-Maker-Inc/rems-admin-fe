import { MenuItem, Select } from "@mui/material";

export const CustomSelector = ({
    value,
    onChange,
    items,
    size = "small",
    fullWidth = false,
}) => (
    <Select fullWidth={fullWidth} size={size} value={value} onChange={onChange}>
        {items.map((it) => (
            <MenuItem key={it} value={it}>
                {it}
            </MenuItem>
        ))}
    </Select>
);
