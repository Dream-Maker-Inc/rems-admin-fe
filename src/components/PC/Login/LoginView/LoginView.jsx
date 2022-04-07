import { Stack } from "@mui/material";
import { LoginLogo } from "../LoginLogo";
import { LoginForm } from "../LoginForm";
import { LoginCopyright } from "../LoginCopyright";

export const LoginView = () => {
  return (
    <Stack
      component={"article"}
      alignItems={"center"}
      minWidth={"1280px"}
      spacing={"48px"}
      padding={"120px"}
      bgcolor={"#2f3539"}
    >
      <Stack maxWidth={"300px"}>
        <LoginLogo />
      </Stack>

      <LoginForm />

      <LoginCopyright />
    </Stack>
  );
};
