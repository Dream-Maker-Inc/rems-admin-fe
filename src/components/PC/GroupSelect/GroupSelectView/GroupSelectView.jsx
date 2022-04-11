import styled from "@emotion/styled";
import { Grid, Stack } from "@mui/material";
import { ItemCard } from "./elements/ItemCard/ItemCard";

export const GroupSelectView = () => {
    const imagePath = `${process.env.PUBLIC_URL}/assets/images`;
    const models = [
        {
            id: "0",
            logoImageUrl: `${imagePath}/logo_senior_citizen.png`,
            bgImageUrl: `${imagePath}/bg_senior_citizen.png`,
            imageAlt: "경로당",
        },
        {
            id: "1",
            logoImageUrl: `${imagePath}/logo_starbucks.png`,
            bgImageUrl: `${imagePath}/bg_coffee.png`,
            imageAlt: "스타벅스",
        },
        {
            id: "2",
            logoImageUrl: `${imagePath}/logo_gs25.png`,
            bgImageUrl: `${imagePath}/bg_store.png`,
            imageAlt: "gs25",
        },
        {
            id: "3",
            logoImageUrl: `${imagePath}/logo_cu.png`,
            bgImageUrl: `${imagePath}/bg_store.png`,
            imageAlt: "cu",
        },
    ];

    const handleGroupClick = (id) => {
        alert(`clicked id: ${id}`);
    };

    return (
        <Root>
            <GridContainer>
                {models.map((it) => (
                    <GridItem key={it.id}>
                        <ItemCard
                            logoImageUrl={it.logoImageUrl}
                            bgImageUrl={it.bgImageUrl}
                            imageAlt={it.imageAlt}
                            onClick={() => handleGroupClick(it.id)}
                        />
                    </GridItem>
                ))}
            </GridContainer>
        </Root>
    );
};

const Root = styled(Stack)`
    width: 100%;
    height: 100%;
    padding: 24px;
    background-color: #303539;
    overflow-y: scroll;
`;

const GridContainer = ({ children }) => (
    <Grid container spacing={"16px"}>
        {children}
    </Grid>
);

const GridItem = ({ children }) => (
    <Grid item lg={6}>
        {children}
    </Grid>
);
