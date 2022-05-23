import styled from "@emotion/styled";
import { TableContainer } from "@mui/material";

export const BasicTableContainer = styled(TableContainer)`
    background-color: #3a3f43;

    border-radius: 4px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
        width: 0;
    }
`;
