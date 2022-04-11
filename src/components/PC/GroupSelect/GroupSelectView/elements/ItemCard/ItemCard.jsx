import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

export const ItemCard = ({ logoImageUrl, bgImageUrl, imageAlt, onClick }) => (
  <StyledButton onClick={onClick}>
    <Inner>
      <ImageContainer>
        <LogoImageWrapper>
          <StyledImage src={logoImageUrl} alt={imageAlt} />
        </LogoImageWrapper>

        <StyledImage src={bgImageUrl} alt={imageAlt} />
      </ImageContainer>
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

const ImageContainer = styled(Stack)`
  position: relative;
  max-width: 240px;
`;

const LogoImageWrapper = styled(Stack)`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledImage = styled("img")`
  width: 100%;
  height: 100%;
`;
