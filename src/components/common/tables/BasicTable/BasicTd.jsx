import { TableCell } from "@mui/material";

export const BasicTd = ({
    width = "140px",
    padding,
    rowSpan,
    bgFixed,
    children,
}) => (
    <TableCell
        component={"td"}
        rowSpan={rowSpan}
        sx={{
            border: "1px solid #555",
            textAlign: "center",
            width,
            padding,
            backgroundColor: bgFixed && "#3A3F44 !important",
        }}
    >
        {children}
    </TableCell>
);
