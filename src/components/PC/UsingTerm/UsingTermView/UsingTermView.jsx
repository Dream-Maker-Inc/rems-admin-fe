import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const UsingTermView = () => {
  const [agreeAll, setAgreeAll] = useState(false);
  const handleAgreeAllCheckChange = (isAgreeAll) => setAgreeAll(isAgreeAll);

  const [agree, setAgree] = useState(false);
  const handleAgreeCheckChange = (isAgree) => setAgree(isAgree);

  const handleAgreeClick = () => alert("todo 동의");
  const handleCancelClick = () => alert("todo 취소");

  return (
    <Stack width={"100%"} height={"100%"} p={"24px"} bgcolor={"#303539"}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="전체 동의"
          value={agreeAll}
          onChange={(e) => handleAgreeAllCheckChange(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="사용 동의"
          value={agree}
          onChange={(e) => handleAgreeCheckChange(e.target.value)}
        />
      </FormGroup>

      <Stack mt={"16px"}>
        <TextField
          multiline
          InputProps={{ readOnly: true, sx: { opacity: 0.7 } }}
          rows={10}
          defaultValue={"어플리케이션을 사용하는데 동의합니다."}
        />
      </Stack>

      <ButtonSection>
        <Button variant={"contained"} size={"small"} onClick={handleAgreeClick}>
          동의
        </Button>
        <Button variant={"outlined"} size={"small"} onClick={handleCancelClick}>
          취소
        </Button>
      </ButtonSection>
    </Stack>
  );
};

const ButtonSection = styled(Stack)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;
