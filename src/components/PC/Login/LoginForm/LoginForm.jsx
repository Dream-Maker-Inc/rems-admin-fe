import styled from "@emotion/styled";
import { KeyRounded, PersonRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const TextFieldColor = "#3c4044";
const PersonIconUrl = `${process.env.PUBLIC_URL}/assets/icons/ic_person.png`;

export const LoginForm = ({
  idValue,
  handleIdChange,
  pwValue,
  handlePwChange,
  rememberMe,
  handleRememberChange,
  handleLoginSubmit,
}) => {
  const disableBtn = !idValue || !pwValue;

  return (
    <Stack alignItems={"center"} width={"100%"} maxWidth={"380px"}>
      <Stack mb={"-40px"}>
        <Avatar
          src={PersonIconUrl}
          sx={{
            width: "100px",
            height: "100px",
            bgcolor: "primary.main",
            color: "#fff",
          }}
        />
      </Stack>

      <StyledCard>
        <Stack spacing={"8px"}>
          <TextField
            placeholder="아이디"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonRounded sx={{ opacity: 0.7 }} />
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: TextFieldColor }}
            value={idValue}
            onChange={(e) => handleIdChange(e.target.value)}
          />
          <TextField
            placeholder="비밀번호"
            type={"password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyRounded sx={{ opacity: 0.7 }} />
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: TextFieldColor }}
            value={pwValue}
            onChange={(e) => handlePwChange(e.target.value)}
          />
        </Stack>

        <Stack mt={"12px"}>
          <Button
            variant="contained"
            size="large"
            disabled={disableBtn}
            onClick={handleLoginSubmit}
          >
            로그인
          </Button>
        </Stack>

        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              아이디 저장
            </Typography>
          }
          sx={{ mt: "12px" }}
          checked={rememberMe}
          onChange={(_, checked) => handleRememberChange(checked)}
        />
      </StyledCard>
    </Stack>
  );
};

const StyledCard = styled(Stack)`
  border-radius: 16px;
  background-color: #454a4e;
  padding: 70px 36px 24px 36px;
  width: 100%;
`;
