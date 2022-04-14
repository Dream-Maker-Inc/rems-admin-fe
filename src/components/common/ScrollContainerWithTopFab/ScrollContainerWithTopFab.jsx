import { Stack } from "@mui/material";
import { useDetectScrollDirection } from "../../../hooks/Scroll/UseDetectScrollDirection";
import { MoveTopFab } from "../MoveTopFab";

export const ScrollContainerWithTopFab = ({ children }) => {
    const { isPossibleScrollTop, isDirectionTop, handleScrollChange } =
        useDetectScrollDirection();

    const handleMoveTop = (e) => console.log(e.target.c);

    return (
        <Root>
            <ScrollableContainer onScroll={handleScrollChange}>
                {children}
            </ScrollableContainer>

            <MoveTopFab
                visible={isPossibleScrollTop && isDirectionTop}
                onClick={handleMoveTop}
            />
        </Root>
    );
};

const Root = ({ children }) => (
    <Stack
        position={"relative"}
        width={"100%"}
        height={"100%"}
        overflow={"hidden"}
    >
        {children}
    </Stack>
);

const ScrollableContainer = ({ onScroll, children }) => (
    <Stack width={"100%"} height={"100%"} overflow={"auto"} onScroll={onScroll}>
        {children}
    </Stack>
);
