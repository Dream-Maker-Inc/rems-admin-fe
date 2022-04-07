import { Stack } from "@mui/material";
import { LoginLogo } from "../LoginLogo";
import { LoginForm } from "../LoginForm";
import { LoginCopyright } from "../LoginCopyright";
import styled from "@emotion/styled";

export const LoginView = () => {
  return (
    <Root component={"article"}>
      <Stack maxWidth={"300px"}>
        <LoginLogo />
      </Stack>

      <LoginForm />

      <LoginCopyright />
    </Root>
  );
};

const Root = styled(Stack)`
  min-width: 1440px;
  height: 100%;
  gap: 48px;
  padding: 120px;
  overflow: scroll;
  background-color: #2f3539;
  align-items: center;
  justify-content: center;

  @media (max-height: 800px) {
    justify-content: flex-start;
  }
`;
