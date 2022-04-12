import { Stack } from "@mui/material";
import { LoginLogo } from "../LoginLogo";
import { LoginForm } from "../LoginForm";
import { LoginCopyright } from "../LoginCopyright";
import styled from "@emotion/styled";

export const LoginView = () => {
    return (
        <Root component={"article"}>
            <Inner>
                <Stack maxWidth={"240px"}>
                    <LoginLogo />
                </Stack>

                <LoginForm />

                <Stack maxWidth={"140px"}>
                    <LoginCopyright />
                </Stack>
            </Inner>
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    height: 100%;
    background-color: #37656d;
    align-items: center;
    justify-content: center;
`;

const Inner = styled(Stack)`
    max-width: 400px;
    width: 100%;
    height: 100%;
    gap: 60px;
    padding: 48px 24px;
    align-items: center;
    justify-content: center;
    overflow-y: auto;

    @media (max-height: 600px) {
        justify-content: flex-start;
    }
`;
