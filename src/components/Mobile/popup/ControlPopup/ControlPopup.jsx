import styled from "@emotion/styled";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ScreenType } from "../../../../themes/Limit";
import { ControlPopupTemplate } from "../ControlPopupTemplate";

const ControlValues = {
  On: "가동",
  Off: "중지",
};

export const ControlPopup = () => {
  // popup open/close
  const [open] = useState(true);

  // radio button
  const [radioValue, setRadioValue] = useState(ControlValues.On);
  const handleRadioChange = (v) => setRadioValue(v);

  // 온도
  const [temperature, setTemperature] = useState(26);
  const increaseTemperature = () => setTemperature((old) => old + 1);
  const decreaseTemperature = () => setTemperature((old) => old - 1);

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

        <TemperatureSection>
          <TemperatureTypo>{temperature}</TemperatureTypo>

          <ButtonSection>
            <IncreaseButton onClick={increaseTemperature} />
            <DecreaseButton onClick={decreaseTemperature} />
          </ButtonSection>
        </TemperatureSection>
      </Inner>
    </ControlPopupTemplate>
  );
};

const Inner = styled(Stack)`
  align-items: center;
  padding: 24px 24px 0 24px;
`;

const TemperatureSection = styled(Stack)`
  align-items: center;
  margin-top: 24px;
  gap: 8px;

  flex-direction: row;

  @media (max-width: ${ScreenType.xs}px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

const TemperatureTypo = ({ children }) => (
  <Typography
    variant="h4"
    fontWeight={500}
    p={"16px"}
  >{`${children}°C`}</Typography>
);

const ButtonSection = styled(Stack)`
  gap: 8px;
  white-space: nowrap;
`;

const IncreaseButton = ({ onClick }) => (
  <Button
    variant="contained"
    startIcon={<AddRounded />}
    onClick={onClick}
    sx={{ bgcolor: "#b12020 !important" }}
  >
    온도 올리기
  </Button>
);

const DecreaseButton = ({ onClick }) => (
  <Button
    variant="contained"
    startIcon={<RemoveRounded />}
    onClick={onClick}
    sx={{ bgcolor: "#3c6584 !important" }}
  >
    온도 내리기
  </Button>
);
