import styled from "@emotion/styled";
import { KeyRounded, PersonRounded } from "@mui/icons-material";
import {
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

export const LoginForm = () => {
    // id
    const [id, setId] = useState("");
    const handleIdChange = (v) => setId(v);

    // password
    const [password, setPassword] = useState("");
    const handlePasswordChange = (v) => setPassword(v);

    // remember me
    const [rememberMe, setRememberMe] = useState(false);
    const handleRememberMeChange = (checked) => setRememberMe(checked);

    // login submit
    const handleLoginSubmit = () => alert("request login");

    // submit button disable
    const disableBtn = !id || !password;

    return (
        <Root>
            <TextFieldGroup>
                <IdTextField value={id} onChange={handleIdChange} />
                <PasswordTextField
                    value={password}
                    onChange={handlePasswordChange}
                />
            </TextFieldGroup>

            <LoginButton disabled={disableBtn} onClick={handleLoginSubmit} />

            <RememberMeCheckLabel
                rememberMe={rememberMe}
                handleRememberChange={handleRememberMeChange}
            />
        </Root>
    );
};

const Root = styled(Stack)`
    max-width: 380px;
    width: 100%;
    align-items: center;
`;

const TextFieldGroup = styled(Stack)`
    width: 100%;
    gap: 8px;
`;

const IdTextField = ({ value, onChange }) => (
    <TextField
        placeholder="아이디"
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <PersonRounded sx={{ opacity: 0.7 }} />
                </InputAdornment>
            ),
            sx: { bgcolor: "#fff" },
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
);

const PasswordTextField = ({ value, onChange }) => (
    <TextField
        placeholder="비밀번호"
        type={"password"}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <KeyRounded sx={{ opacity: 0.7 }} />
                </InputAdornment>
            ),
            sx: { bgcolor: "#fff" },
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
);

const RememberMeCheckLabel = ({ rememberMe, handleRememberChange }) => (
    <FormControlLabel
        control={
            <Checkbox
                sx={{
                    color: "#fff",
                    "&.Mui-checked": { color: "secondary.main" },
                }}
            />
        }
        label={
            <Typography variant="body2" color={"#fff"} sx={{ opacity: 0.8 }}>
                자동 로그인
            </Typography>
        }
        sx={{ mt: "12px" }}
        checked={rememberMe}
        onChange={(_, checked) => handleRememberChange(checked)}
    />
);

const LoginButton = ({ disabled, onClick }) => (
    <Button
        variant="contained"
        size="large"
        color={"secondary"}
        disabled={disabled}
        sx={{ width: "100%", mt: "12px", color: "primary.main" }}
        onClick={onClick}
    >
        로그인
    </Button>
);
