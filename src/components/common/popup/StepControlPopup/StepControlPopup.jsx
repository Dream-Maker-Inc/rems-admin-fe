import styled from "@emotion/styled";
import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { useState } from "react";
import { ControlPopupTemplate } from "../ControlPopupTemplate";

const ControlValues = {
    Stop: "중지",
    Step1: "1단",
    Step2: "2단",
    Step3: "3단",
};

export const StepControlPopup = () => {
    // popup open/close
    const [open] = useState(true);

    // radio button
    const [radioValue, setRadioValue] = useState(ControlValues.Stop);
    const handleRadioChange = (v) => setRadioValue(v);

    // submit button
    const handleSubmitClick = () => alert("ok");

    return (
        <ControlPopupTemplate open={open} onClick={handleSubmitClick}>
            <Inner>
                <RadioGroup
                    value={radioValue}
                    onChange={(e) => handleRadioChange(e.target.value)}
                >
                    <Stack direction={"row"} spacing={"8px"}>
                        <StyledFormControlLabel
                            value={ControlValues.Stop}
                            control={<Radio defaultChecked />}
                            label={ControlValues.Stop}
                        />
                        <StyledFormControlLabel
                            value={ControlValues.Step1}
                            control={<Radio />}
                            label={ControlValues.Step1}
                        />
                    </Stack>

                    <Stack direction={"row"} spacing={"8px"} mt={"16px"}>
                        <StyledFormControlLabel
                            value={ControlValues.Step2}
                            control={<Radio />}
                            label={ControlValues.Step2}
                        />
                        <StyledFormControlLabel
                            value={ControlValues.Step3}
                            control={<Radio />}
                            label={ControlValues.Step3}
                        />
                    </Stack>
                </RadioGroup>
            </Inner>
        </ControlPopupTemplate>
    );
};

const Inner = styled(Stack)`
    align-items: center;
    padding: 36px 24px 0 24px;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
    min-width: 80px;
`;
