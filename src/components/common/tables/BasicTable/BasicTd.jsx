import { TableCell } from "@mui/material";

export const BasicTd = ({ width = "140px", children }) => (
    <TableCell
        component={"td"}
        sx={{
            border: "1px solid #555",
            textAlign: "center",
            width,
        }}
    >
        {children}
    </TableCell>
);
