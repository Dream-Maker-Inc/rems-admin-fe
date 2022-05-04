import { TableCell, Typography } from "@mui/material";

export const BasicTh = ({
    width = "140px",
    textAlign = "center",
    children,
}) => (
    <TableCell
        component={"th"}
        width={width}
        sx={{
            bgcolor: "#3f464c",
            border: "1px solid #555",
            whiteSpace: "nowrap",
            textAlign,
        }}
    >
        <Typography>{children}</Typography>
    </TableCell>
);
