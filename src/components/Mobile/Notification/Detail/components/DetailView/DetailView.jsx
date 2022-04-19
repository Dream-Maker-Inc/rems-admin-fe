import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const DetailView = () => {
    const model = {
        target: {
            title: "편백 경로당",
            gear: "에어컨/거실1",
            date: "2021.01.01 09:00:00",
            error: "가동 에러",
        },
        action: {
            values: ["조치방법1", "조치방법2", "조치방법3"],
            content: "처리완료",
        },
    };
    const { target, action } = model;

    // selector
    const [selectorValue, setSelectorValue] = useState(action.values[0]);
    const handleSelectorChange = (v) => setSelectorValue(v);

    // submit
    const handleSubmit = () => alert("ok");

    return (
        <Stack width={"100%"}>
            <HeadContainer>
                <Typography variant="subtitle1" fontWeight={500} gutterBottom>
                    {target.title}
                </Typography>

                <Stack sx={{ opacity: 0.7 }}>
                    <Description>{target.gear}</Description>
                    <Description>{target.date}</Description>
                    <Description>{target.error}</Description>
                </Stack>
            </HeadContainer>

            <ActionContainer>
                <ActionWaysContainer>
                    <Typography>{"조치방법"}</Typography>
                    <CustomSelector
                        value={selectorValue}
                        onChange={(e) => handleSelectorChange(e.target.value)}
                        items={action.values}
                    />
                </ActionWaysContainer>

                <Stack spacing={"16px"}>
                    <Typography>{"조치내용"}</Typography>
                    <TextArea>{action.content}</TextArea>
                </Stack>

                <ButtonWrapper>
                    <Button
                        variant={"contained"}
                        size={"large"}
                        onClick={handleSubmit}
                    >
                        저장
                    </Button>
                </ButtonWrapper>
            </ActionContainer>
        </Stack>
    );
};

const HeadContainer = ({ children }) => (
    <Stack bgcolor={"#eee"} padding={"12px 16px"}>
        {children}
    </Stack>
);

const Description = ({ children }) => (
    <Typography>{`- ${children}`}</Typography>
);

const ActionContainer = ({ children }) => (
    <Stack bgcolor={"#fff"} padding={"12px 16px"} spacing={"8px"}>
        {children}
    </Stack>
);

const ActionWaysContainer = ({ children }) => (
    <Stack
        direction={"row"}
        whiteSpace={"nowrap"}
        alignItems={"center"}
        spacing={"16px"}
    >
        {children}
    </Stack>
);

const CustomSelector = ({ value, onChange, items }) => (
    <Select
        fullWidth
        size="small"
        sx={{ bgcolor: "#fff" }}
        value={value}
        onChange={onChange}
    >
        {items.map((it) => (
            <MenuItem key={it} value={it}>
                {it}
            </MenuItem>
        ))}
    </Select>
);

const TextArea = ({ children }) => (
    <Stack
        bgcolor={"#e9eff1"}
        borderRadius={"4px"}
        padding={"12px"}
        minHeight={"180px"}
    >
        <Typography variant="body2">{children}</Typography>
    </Stack>
);

const ButtonWrapper = ({ children }) => (
    <Stack width={"100%"} p={"24px 36px"}>
        {children}
    </Stack>
);
