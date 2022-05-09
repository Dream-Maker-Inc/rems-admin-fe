import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

export const CardItemTemplate = ({ title, children }) => {
    return (
        <Root>
            <TitleWrapper>
                <Typography fontWeight={400} sx={{ opacity: 0.8 }}>
                    {title}
                </Typography>
            </TitleWrapper>

            <ContentWrapper>{children}</ContentWrapper>
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    background-color: #3f464c;
    border-radius: 4px;
`;

const TitleWrapper = styled(Stack)`
    padding: 8px 16px;
    border-bottom: 1px solid #555;
`;

const ContentWrapper = styled(Stack)`
    padding: 16px;
    background-color: #4e5359;
    height: 100%;
`;
