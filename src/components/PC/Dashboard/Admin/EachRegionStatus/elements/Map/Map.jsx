import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { MapBackground } from "./MapBackground";

/**
 * models: {
 *  [string of mapAreaTypes]: {
 *    id: number,
 *    title: string,
 *    color: string,
 *    content: ReactNode
 *  },
 * }
 * legends: {
 *  color: string,
 *  label: string
 * }[]
 * unit: string
 */
export const Map = ({ models, legends, unit }) => {
    const left = models.slice(0, 5);
    const right = models.slice(5, 10);

    return (
        <Root>
            <MapBackground models={models} />

            <Layer>
                <LayerSection>
                    {left.map(({ id, content }) => (
                        <InnerBox key={id}>{content}</InnerBox>
                    ))}
                </LayerSection>

                <LayerSection>
                    {right.map(({ id, content }) => (
                        <InnerBox key={id}>{content}</InnerBox>
                    ))}
                </LayerSection>

                <LegendSection>
                    {legends.map((it) => (
                        <LegendItem key={it.label} {...it} />
                    ))}
                </LegendSection>

                {unit && <UnitCaption>{unit}</UnitCaption>}
            </Layer>
        </Root>
    );
};

const Root = styled(Stack)`
    position: relative;
    width: fit-content;
    margin: -22px -22px -16px -22px; // 이미지 보정
`;

export const Background = styled("img")`
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
    z-index: 3;
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

const LegendSection = styled(Stack)`
    flex-direction: row;
    align-items: center;
    gap: 20px;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`;

const LegendItem = ({ color, label }) => (
    <Stack direction={"row"} spacing={"8px"} alignItems={"center"}>
        <Stack
            width={"14px"}
            height={"14px"}
            borderRadius={"4px"}
            bgcolor={color}
        />
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {label}
        </Typography>
    </Stack>
);

const UnitCaption = ({ children }) => (
    <Stack position={"absolute"} bottom={0} right={0} margin={"8px 24px"}>
        <Typography variant="body2" fontWeight={300} sx={{ opacity: 0.8 }}>
            {children}
        </Typography>
    </Stack>
);
