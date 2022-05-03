import { Stack } from "@mui/material";
import { SiteSearchRow } from "./SiteSearchRow";

export const SiteSearch = () => {
    return (
        <Root>
            <SiteSearchRow />
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        direction={"row"}
        width={"100%"}
        bgcolor={"#374750"}
        padding={"16px"}
        color={"#fff"}
        whiteSpace={"nowrap"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);
