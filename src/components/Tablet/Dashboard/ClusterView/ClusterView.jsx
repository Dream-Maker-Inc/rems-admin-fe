import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { ScrollContainerWithTopFab } from "../../../common/ScrollContainerWithTopFab";
import { GearStateItem } from "../../../common/GearStateItem";

export const ClusterView = () => {
    const model = {
        title: "내부온도",
        data: [
            {
                name: "거실1",
                state: {
                    label: "가동",
                    isRun: true,
                },
                temperature: "26",
            },
            {
                name: "거실2",
                state: {
                    label: "중지",
                    isRun: false,
                },
                temperature: "26",
            },
            {
                name: "거실3",
                temperature: "26",
            },
            {
                name: "거실4",
                temperature: "26",
            },
            {
                name: "방1",
                temperature: "26",
            },
            {
                name: "방2",
                temperature: "26",
            },
            {
                name: "방3",
                temperature: "26",
            },
            {
                name: "방4",
                temperature: "26",
            },
            {
                name: "창고1",
                temperature: "26",
            },
            {
                name: "창고2",
                temperature: "26",
            },
            {
                name: "창고3",
                temperature: "26",
            },
            {
                name: "창고4",
                temperature: "26",
            },
        ],
    };
    const { title, data } = model;

    return (
        <Root>
            <Stack alignItems={"center"}>
                <Typography variant="h5" fontWeight={500}>
                    {title}
                </Typography>
            </Stack>

            <ScrollContainerWithTopFab>
                <GridContainer>
                    {data.map(({ name, state, temperature }) => (
                        <GearStateItem
                            key={name}
                            model={{ name, state, temperature }}
                        />
                    ))}
                </GridContainer>
            </ScrollContainerWithTopFab>
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        bgcolor={"#fff"}
        width={"100%"}
        padding={"36px 24px"}
        spacing={"36px"}
        borderRadius={"4px"}
    >
        {children}
    </Stack>
);

const GridContainer = styled("div")`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`;
