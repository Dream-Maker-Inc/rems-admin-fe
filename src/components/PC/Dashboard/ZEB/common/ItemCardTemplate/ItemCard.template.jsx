import { Stack } from "@mui/material";

export const ItemCardTemplate = ({ rows, innerPadding = "16px", height }) => {
    return (
        <Root height={height}>
            {rows.map((it, index) => (
                <Inner key={index} innerPadding={innerPadding}>
                    {it}
                </Inner>
            ))}
        </Root>
    );
};

const Root = ({ children, height }) => (
    <Stack
        width="100%"
        height={height}
        bgcolor="#4e5359"
        borderRadius={"4px"}
        padding={"24px"}
        spacing="8px"
        overflow={"hidden"}
    >
        {children}
    </Stack>
);

const Inner = ({ children, innerPadding }) => (
    <Stack
        bgcolor="#3d4045"
        width="100%"
        padding={innerPadding}
        borderRadius={"4px"}
    >
        {children}
    </Stack>
);
