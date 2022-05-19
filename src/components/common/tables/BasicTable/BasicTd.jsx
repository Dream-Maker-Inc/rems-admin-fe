import { TableCell } from "@mui/material";

export const BasicTd = ({ width = "140px", padding, children }) => (
    <TableCell
        component={"td"}
        sx={{
            border: "1px solid #555",
            textAlign: "center",
            width,
            padding,
        }}
    >
        {children}
    </TableCell>
);
