import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

export const CardTempplate = ({ title, children }) => {
    return (
        <Root>
            <TitleWrapper>
                <Typography variant="subtitle1" fontWeight={500}>
                    {title}
                </Typography>
            </TitleWrapper>

            <ContentWrapper>{children}</ContentWrapper>
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    background-color: #3a3f43;
    border-radius: 4px;
`;

const TitleWrapper = styled(Stack)`
    padding: 8px 16px;
    border-bottom: 1px solid #555;
`;

const ContentWrapper = styled(Stack)`
    padding: 16px;
`;
