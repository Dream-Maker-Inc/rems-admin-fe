import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { useState } from "react";
import { SettingSectionTemplate } from "../common/SettingSectionTemplate/SettingSectionTemplate";
import { RowLeftTypo } from "../common/RowLeftTypo/RowLeftTypo";

export const NotificationSetting = () => {
    const radioItems = [
        {
            value: "positive",
            label: "수신",
        },
        {
            value: "negative",
            label: "미수신",
        },
    ];

    const [radioValue, setRadioValue] = useState("positive");
    const handleRadioChange = (v) => setRadioValue(v);

    return (
        <SettingSectionTemplate title={"알람 수신 여부"}>
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={"16px"}
            >
                <RowLeftTypo>설비 알람</RowLeftTypo>

                <RadioGroup
                    row
                    value={radioValue}
                    onChange={(e) => handleRadioChange(e.target.value)}
                    sx={{ width: "100%" }}
                >
                    {radioItems.map((it) => (
                        <FormControlLabel
                            key={it.label}
                            value={it.value}
                            control={<Radio />}
                            label={it.label}
                        />
                    ))}
                </RadioGroup>
            </Stack>
        </SettingSectionTemplate>
    );
};
