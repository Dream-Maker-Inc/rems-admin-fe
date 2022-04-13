import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { MainDrawer } from "../MainDrawer";
import { MainHeader } from "../MainHeader";

export const MainTemplate = ({ children }) => {
    return (
        <Root>
            <MainDrawer />

            <Stack width={"100%"} height={"100%"} bgcolor={"primary.main"}>
                <MainHeader />
                <Stack overflow={"auto"}>{children}</Stack>
            </Stack>
        </Root>
    );
};

const Root = styled(Stack)`
    flex-direction: row;
    width: 100%;
    height: 100%;
`;
