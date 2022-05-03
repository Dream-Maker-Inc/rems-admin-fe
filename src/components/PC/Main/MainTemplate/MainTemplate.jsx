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
                <ContentSection>{children}</ContentSection>
            </Right>
        </Root>
    );
};

const Root = styled(Stack)`
    flex-direction: row;
    min-width: 1440px;
    width: 100%;
    height: 100%;
`;

const Right = styled(Stack)`
    width: 100%;
    height: 100%;
`;

const ContentSection = styled(Stack)`
    background-color: #303539;
    height: 100%;
    overflow: hidden;
`;
