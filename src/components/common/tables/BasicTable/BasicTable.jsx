import { Table } from "@mui/material";

export const BasicTable = ({ children, borderStyle = "hidden" }) => (
    <Table
        stickyHeader
        sx={{
            borderCollapse: "collapse",
            borderStyle,
            "& .Mui-selected": { backgroundColor: "#43484c !important" },
        }}
    >
        {children}
    </Table>
);
