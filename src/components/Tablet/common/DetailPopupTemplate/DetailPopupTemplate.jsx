import { Stack, TextField, Typography } from "@mui/material";
import { PopupTemplate } from "../PopupTemplate/PopupTemplate";

/*
const model = {
    firstRow: {
        label: "설비",
        value: "[에어컨] 거실1",
    },
    secondRow: {
        first: {
            label: "위치",
            value: "거실1",
        },
        second: {
            label: "알람일시",
            value: "2021.01.01 09:00:00",
        },
    },
    textarea: {
        label: "알람 내용",
        value: "가동 에러",
    },
};
*/

export const DetailPopupTemplate = ({ open, onClose, title, model }) => {
    const { firstRow, secondRow, textarea } = model;

    return (
        <PopupTemplate
            open={open}
            onClose={onClose}
            title={title}
            height={"fit-content"}
        >
            <Root>
                <Stack spacing={"12px"}>
                    <TitleInputRow>
                        <Typography minWidth={"44px"} textAlign={"end"}>
                            {firstRow.label}
                        </Typography>
                        <ReadOnlyInput value={firstRow.value} />
                    </TitleInputRow>

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={"24px"}
                    >
                        <TitleInputRow>
                            <Typography minWidth={"44px"} textAlign={"end"}>
                                {secondRow.first.label}
                            </Typography>
                            <ReadOnlyInput value={secondRow.first.value} />
                        </TitleInputRow>
                        <TitleInputRow>
                            <Typography>{secondRow.second.label}</Typography>
                            <ReadOnlyInput value={secondRow.second.value} />
                        </TitleInputRow>
                    </Stack>
                </Stack>

                <Stack spacing={"8px"}>
                    <Typography>{textarea.label}</Typography>
                    <TextArea>{textarea.value}</TextArea>
                </Stack>
            </Root>
        </PopupTemplate>
    );
};

const Root = ({ children }) => (
    <Stack
        height={"100%"}
        overflow={"auto"}
        padding={"16px"}
        whiteSpace={"nowrap"}
        spacing={"24px"}
    >
        {children}
    </Stack>
);

const TitleInputRow = ({ children }) => (
    <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
        {children}
    </Stack>
);

const ReadOnlyInput = ({ value }) => (
    <TextField
        size={"small"}
        fullWidth
        sx={{ pointerEvents: "none" }}
        value={value}
    />
);

const TextArea = ({ children }) => (
    <Stack
        bgcolor={"#e9eff1"}
        borderRadius={"4px"}
        padding={"12px"}
        minHeight={"180px"}
    >
        <Typography
            variant="body2"
            whiteSpace={"pre-wrap"}
            display={"flex"}
            flexDirection={"column"}
            gap={"4px"}
        >
            {children}
        </Typography>
    </Stack>
);
