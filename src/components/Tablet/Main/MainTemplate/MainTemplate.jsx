import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { MainHeader } from "../MainHeader";

export const MainTemplate = ({ children }) => {
    return (
        <Root>
            <Stack width={"100%"} height={"100%"} bgcolor={"primary.main"}>
                <MainHeader />
                <Stack overflow={"auto"} height={"100%"}>
                    {children}
                </Stack>
            </Stack>
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    height: 100%;
`;
