import styled from "@emotion/styled";
import { TableContainer } from "@mui/material";

export const BasicTableContainer = styled(TableContainer)`
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
        width: 0;
    }
`;
