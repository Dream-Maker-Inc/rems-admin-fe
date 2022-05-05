import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Map = ({ leftItems, rightItems }) => {
    return (
        <Root>
            <Background
                src={`${process.env.PUBLIC_URL}/assets/images/bg_dashboard_map.png`}
                alt="dashboard-map"
            />
            <Layer>
                <LayerSection>
                    {leftItems.map((it) => (
                        <InnerBox>{it}</InnerBox>
                    ))}
                </LayerSection>

                <LayerSection>
                    {rightItems.map((it) => (
                        <InnerBox>{it}</InnerBox>
                    ))}
                </LayerSection>
            </Layer>
        </Root>
    );
};

const Root = styled(Stack)`
    position: relative;
`;

const Background = styled("img")`
    width: 800px;
    height: 680px;
`;

const Layer = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const LayerSection = styled(Stack)`
    margin: 24px;
    width: 215px;
    height: 600px;
    gap: 32px;
`;

const InnerBox = styled(Stack)`
    width: 100%;
    aspect-ratio: 2.263;
`;
