import styled from "@emotion/styled";
import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { useState } from "react";
import { ControlPopupTemplate } from "../ControlPopupTemplate";

const ControlValues = {
    On: "점등",
    Off: "소등",
};

export const LightControlPopup = () => {
    // popup open/close
    const [open] = useState(true);

    // radio button
    const [radioValue, setRadioValue] = useState(ControlValues.On);
    const handleRadioChange = (v) => setRadioValue(v);

    // submit button
    const handleSubmitClick = () => alert("ok");

    return (
        <ControlPopupTemplate open={open} onClick={handleSubmitClick}>
            <Inner>
                <RadioGroup
                    row
                    value={radioValue}
                    onChange={(e) => handleRadioChange(e.target.value)}
                >
                    <FormControlLabel
                        value={ControlValues.On}
                        control={<Radio defaultChecked />}
                        label={ControlValues.On}
                    />
                    <FormControlLabel
                        value={ControlValues.Off}
                        control={<Radio />}
                        label={ControlValues.Off}
                    />
                </RadioGroup>
            </Inner>
        </ControlPopupTemplate>
    );
};

const Inner = styled(Stack)`
    align-items: center;
    padding: 36px 24px 0 24px;
`;
