import styled from "@emotion/styled";
import { ExpandLessRounded } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";

export const History = () => {
    const models = [
        {
            id: "1",
            createdAt: "2021.09.01 00:00:00",
            state: "[발생]",
        },
        {
            id: "2",
            createdAt: "2021.09.01 00:00:00",
            content: "- 확인자 : 박상현(systemadmin)",
            state: "[확인]",
        },
        {
            id: "3",
            createdAt: "2021.09.01 00:00:00",
            content:
                "- 처리자 : 박상현(systemadmin)\n- 처리 방법: 유선상담\n- 처리 내용: 오알람",
            state: "[처리]",
        },
        {
            id: "4",
            createdAt: "2021.09.01 00:00:00",
            content:
                "- 처리자 : 박상현(systemadmin)\n- 처리 방법: 유선상담\n- 처리 내용: 오알람",
            state: "[처리]",
        },
        {
            id: "5",
            createdAt: "2021.09.01 00:00:00",
            content:
                "- 처리자 : 박상현(systemadmin)\n- 처리 방법: 유선상담\n- 처리 내용: 오알람",
            state: "[처리]",
        },
        {
            id: "6",
            createdAt: "2021.09.01 00:00:00",
            content:
                "- 처리자 : 박상현(systemadmin)\n- 처리 방법: 유선상담\n- 처리 내용: 오알람",
            state: "[처리]",
        },
    ];

    const [targetId, setTargetId] = useState(models[0].id);
    const releaseTargetOrSetNewTarget = (id) =>
        setTargetId((old) => (old === id ? false : id));

    return (
        <Root>
            {models.map((it) => (
                <StyledAccordion
                    key={it.id}
                    expanded={targetId === it.id}
                    onChange={() => releaseTargetOrSetNewTarget(it.id)}
                >
                    <StyledAccordionSummary
                        expandIcon={it.content && <ExpandLessRounded />}
                    >
                        <Summary state={it.state} title={it.createdAt} />
                    </StyledAccordionSummary>

                    {it.content && (
                        <StyledAccordionDetails>
                            <Typography
                                whiteSpace={"pre-line"}
                                lineHeight={"32px"}
                                sx={{ opacity: 0.8 }}
                            >
                                {it.content}
                            </Typography>
                        </StyledAccordionDetails>
                    )}
                </StyledAccordion>
            ))}
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
`;

const StyledAccordion = styled(Accordion)`
    margin: 0 !important;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
    background-color: #3f464c;
    border-bottom: 1px solid #eeeeee33;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
    background-color: #3a3f43;
    padding: 12px 36px;
`;

const Summary = ({ state, title }) => (
    <Stack direction={"row"} spacing={"8px"}>
        <Typography color={"primary.main"}>{state}</Typography>
        <Typography>{title}</Typography>
    </Stack>
);
