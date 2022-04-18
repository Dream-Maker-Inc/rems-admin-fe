import styled from "@emotion/styled";
import { ExpandCircleDownRounded } from "@mui/icons-material";
import { Collapse, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const NoticeItem = () => {
    const model = {
        title: "전체공지입니다.",
        createdAt: "2021.01.01 10:00:00",
        creator: "시스템 관리자",
        content:
            "오늘 오전에 설비 알람이 발생되었지만 이용하는 데 문제가 없습니다. 정상적으로 이용 가능합니다.",
    };

    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => setExpanded((old) => !old);

    return (
        <Stack width={"100%"}>
            <TitleSection>
                <Typography variant="subtitle1" fontWeight={500}>
                    {model.title}
                </Typography>
            </TitleSection>
            <ContentSection>
                <FirstRow>
                    <MetaDataContainer>
                        <Typography>{`작성일 : ${model.createdAt}`}</Typography>
                        <Typography>{`작성자 : ${model.creator}`}</Typography>
                    </MetaDataContainer>

                    <IconButton onClick={handleToggle}>
                        <CirecleArrowIcon fontSize="large" active={expanded} />
                    </IconButton>
                </FirstRow>

                <Collapse in={expanded}>
                    <TextArea>{model.content}</TextArea>
                </Collapse>
            </ContentSection>
        </Stack>
    );
};

const CirecleArrowIcon = styled(ExpandCircleDownRounded)`
    transition: all ease-in-out 0.1s;
    transform: ${({ active }) => (active ? "rotate(-180deg)" : "")};
`;

const TitleSection = ({ children }) => (
    <Stack width={"100%"} bgcolor={"#eee"} p={"8px 16px"}>
        {children}
    </Stack>
);

const ContentSection = ({ children }) => (
    <Stack bgcolor={"#fff"} padding={"12px 16px"} spacing={"8px"}>
        {children}
    </Stack>
);

const FirstRow = ({ children }) => (
    <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
    >
        {children}
    </Stack>
);

const MetaDataContainer = ({ children }) => (
    <Stack sx={{ opacity: 0.7 }}>{children}</Stack>
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
