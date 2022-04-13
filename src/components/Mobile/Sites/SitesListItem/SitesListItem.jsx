import { Button, Stack, Typography } from "@mui/material";

export const SitesListItem = ({ model, onClick }) => {
    return (
        <Root>
            <Stack component={"dl"}>
                <Title>{model.title}</Title>

                <DescriptionContainer>
                    <Desc>{`- 주소: ${model.address}`}</Desc>
                    <Desc>{`- 등록일자: ${model.createdAt}`}</Desc>
                </DescriptionContainer>
            </Stack>

            <Button variant="contained" onClick={onClick}>
                선택
            </Button>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"16px"}
        bgcolor={"#fff"}
        borderBottom={"1px solid #eee"}
    >
        {children}
    </Stack>
);

const Title = ({ children }) => (
    <Typography component={"dt"} variant="subtitle1" fontWeight={500}>
        {children}
    </Typography>
);

const Desc = ({ children }) => (
    <Typography component={"dd"} variant="body2" sx={{ opacity: 0.7 }}>
        {children}
    </Typography>
);

const DescriptionContainer = ({ children }) => (
    <Stack spacing={"4px"} mt={"4px"}>
        {children}
    </Stack>
);
