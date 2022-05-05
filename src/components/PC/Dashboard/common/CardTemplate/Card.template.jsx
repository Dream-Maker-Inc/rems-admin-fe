import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

export const CardTemplate = ({ title, width = "100%", children }) => {
    return (
        <Root width={width}>
            <TitleWrapper>
                <Typography variant="subtitle1" fontWeight={500}>
                    {title}
                </Typography>
            </TitleWrapper>

            <ContentWrapper>{children}</ContentWrapper>
        </Root>
    );
};

const Root = ({ width, children }) => (
    <Stack
        width={width}
        height={"100%"}
        sx={{ backgroundColor: "#3a3f43", borderRadius: "4px" }}
    >
        {children}
    </Stack>
);

const TitleWrapper = styled(Stack)`
    padding: 8px 16px;
    border-bottom: 1px solid #555;
`;

const ContentWrapper = styled(Stack)`
    padding: 16px;
`;
