import { Typography } from "@mui/material";

export const RowLeftTypo = ({ children }) => (
    <Typography minWidth={"120px"} textAlign={"end"} sx={{ opacity: 0.8 }}>
        {children}
    </Typography>
);
