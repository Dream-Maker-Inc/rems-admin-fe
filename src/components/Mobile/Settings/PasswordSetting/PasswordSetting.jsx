import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { RowLeftTypo } from "../common/RowLeftTypo";
import { SettingSectionTemplate } from "../common/SettingSectionTemplate/SettingSectionTemplate";
import { Row } from "../common/Row/Row";

export const PasswordSetting = () => {
    const [prevPw, setPrevPw] = useState("");
    const handlePrevPwChange = (v) => setPrevPw(v);

    const [newPw, setNewPw] = useState("");
    const handleNewPwChange = (v) => setNewPw(v);

    const [newPwConfirm, setNewPwConfirm] = useState("");
    const handleNewPwConfirmChange = (v) => setNewPwConfirm(v);

    return (
        <SettingSectionTemplate title={"비밀번호 변경"}>
            <Stack spacing={"12px"}>
                <Row>
                    <RowLeftTypo>변경 전 비밀번호</RowLeftTypo>
                    <RowTextField
                        placeholder="변경 전 비밀번호"
                        value={prevPw}
                        onChange={(e) => handlePrevPwChange(e.target.value)}
                    />
                </Row>

                <Row>
                    <RowLeftTypo>새로운 비밀번호</RowLeftTypo>
                    <RowTextField
                        placeholder="새로운 비밀번호"
                        value={newPw}
                        onChange={(e) => handleNewPwChange(e.target.value)}
                    />
                </Row>

                <Row>
                    <RowLeftTypo>비밀번호 재입력</RowLeftTypo>
                    <RowTextField
                        placeholder="비밀번호 재입력"
                        value={newPwConfirm}
                        onChange={(e) =>
                            handleNewPwConfirmChange(e.target.value)
                        }
                    />
                </Row>
            </Stack>
        </SettingSectionTemplate>
    );
};

const RowTextField = ({ placeholder, value, onChange }) => (
    <TextField
        size="small"
        variant="outlined"
        fullWidth
        type={"password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);
