import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

export const ItemCard = ({ imageUrl, imageAlt, onClick }) => (
  <StyledButton onClick={onClick}>
    <Inner>
      <ImageWrapper>
        <StyledImage src={imageUrl} alt={imageAlt} />
      </ImageWrapper>
    </Inner>
  </StyledButton>
);

const StyledButton = ({ onClick, children }) => (
  <Button fullWidth sx={{ padding: 0, overflow: "hidden" }} onClick={onClick}>
    {children}
  </Button>
);

const Inner = styled(Stack)`
  width: 100%;
  background-color: #3a3f43;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4/2;
`;

const ImageWrapper = styled(Stack)`
  max-width: 200px;
`;

const StyledImage = styled("img")`
  width: 100%;
  height: 100%;
`;
