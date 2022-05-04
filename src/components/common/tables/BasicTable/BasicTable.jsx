import { Table } from "@mui/material";

export const BasicTable = ({ children }) => (
    <Table
        stickyHeader
        sx={{
            borderCollapse: "collapse",
            borderStyle: "hidden",
            "& .Mui-selected": { backgroundColor: "#43484c !important" },
        }}
    >
        {children}
    </Table>
);
