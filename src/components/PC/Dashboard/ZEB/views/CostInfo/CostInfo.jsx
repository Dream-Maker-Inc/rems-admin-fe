import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { LabelWithCircle } from "../../../../../common/LabelWithCircle";
import { CostSummary, CostDetail } from "./elements";

export const CostInfo = () => {
    return (
        <Root>
            <Inner>
                <Section>
                    <LabelWithCircle title={"전기 비용"} />

                    <Row>
                        <Stack flexGrow={1}>
                            <CostSummary />
                        </Stack>

                        <Stack>
                            <CostDetail />
                        </Stack>
                    </Row>
                </Section>

                <Section>
                    <LabelWithCircle title={"가스 비용"} />

                    <Row>
                        <Stack flexGrow={1}>
                            <CostSummary />
                        </Stack>

                        <Stack>
                            <CostDetail />
                        </Stack>
                    </Row>
                </Section>
            </Inner>
        </Root>
    );
};

const Root = styled(Stack)`
    background-color: #3a3f43;
    width: 100%;
    position: relative;
`;

const Inner = styled(Stack)`
    padding: 24px;
    overflow: hidden;
    gap: 48px;
`;

const Section = styled(Stack)`
    gap: 8px;
`;

const Row = styled(Stack)`
    flex-direction: row;
    width: 100%;
    gap: 24px;
`;
