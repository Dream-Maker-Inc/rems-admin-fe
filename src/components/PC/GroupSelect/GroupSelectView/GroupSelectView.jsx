import { Grid, Stack } from "@mui/material";
import { MainTemplate } from "../../Main/MainTemplate";
import { ItemCard } from "./elements/ItemCard/ItemCard";

export const GroupSelectView = () => {
  const models = [
    {
      id: "0",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/senior_citizen.png`,
      imageAlt: "경로당",
    },
    {
      id: "1",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/starbucks.png`,
      imageAlt: "스타벅스",
    },
    {
      id: "2",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/gs25.png`,
      imageAlt: "gs25",
    },
    {
      id: "3",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/cu.png`,
      imageAlt: "cu",
    },
  ];

  const handleGroupClick = (id) => {
    alert(`clicked id: ${id}`);
  };

  return (
    <Stack width={"100%"} height={"100%"} p={"24px"} bgcolor={"#303539"}>
      <GridContainer>
        {models.map((it) => (
          <GridItem key={it.id}>
            <ItemCard
              imageUrl={it.imageUrl}
              imageAlt={it.imageAlt}
              onClick={() => handleGroupClick(it.id)}
            />
          </GridItem>
        ))}
      </GridContainer>
    </Stack>
  );
};

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
