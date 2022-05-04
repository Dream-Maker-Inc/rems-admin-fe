import { TableRow } from "@mui/material";

export const BasicTdRow = ({ selected, onClick, children }) => (
    <TableRow
        hover
        sx={{ bgcolor: "#3a3f43" }}
        selected={selected}
        onClick={onClick}
    >
        {children}
    </TableRow>
);
