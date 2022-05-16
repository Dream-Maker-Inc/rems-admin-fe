import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { MainDrawer } from "../MainDrawer";
import { MainHeader } from "../MainHeader";

export const MainTemplate = ({ children }) => {
    return (
        <Root>
            <MainDrawer isOpen={true} />

            <Right>
                <MainHeader />
                <ContentSection>
                    <ContentWrapper>{children}</ContentWrapper>
                </ContentSection>
            </Right>
        </Root>
    );
};

const Root = styled(Stack)`
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Right = styled(Stack)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ContentSection = styled(Stack)`
    background-color: #303539;
    height: 100%;
    overflow: auto;
`;

const ContentWrapper = styled(Stack)`
    min-width: 1160px;
`;
